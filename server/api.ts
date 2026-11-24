/**
 * ST CONSTRUCTIONS - Backend API Router
 * Handles /api/health, /api/enquiries with validation, rate limiting,
 * server-side Web3Forms delivery, and optional CRM webhook forwarding.
 */
import express, { Request, Response, NextFunction } from 'express';

export const apiRouter = express.Router();

interface RateLimitRecord {
  count: number;
  startTime: number;
}

interface EnquiryRecord {
  id: string;
  fullName: string;
  phoneNumber: string;
  email: string | null;
  enquiryTopic: string;
  message: string | null;
  consentGiven: boolean;
  submittedAt: string;
  clientIp: string;
}

// Memory store for rate limiting (max 10 requests per 15 min per IP)
const ipRateLimit = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function rateLimitMiddleware(req: Request, res: Response, next: NextFunction): void {
  const forwarded = req.headers['x-forwarded-for'];
  const forwardedIp = Array.isArray(forwarded)
    ? forwarded[0]
    : forwarded?.toString().split(',')[0].trim();
  const clientIp = forwardedIp || req.ip || req.socket?.remoteAddress || 'unknown';
  const now = Date.now();

  if (ipRateLimit.size > 1000) {
    for (const [key, value] of ipRateLimit.entries()) {
      if (now - value.startTime > RATE_LIMIT_WINDOW_MS) {
        ipRateLimit.delete(key);
      }
    }
  }

  const record = ipRateLimit.get(clientIp);
  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    ipRateLimit.set(clientIp, { count: 1, startTime: now });
    next();
    return;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting another enquiry.'
    });
    return;
  }

  record.count += 1;
  next();
}

// Validate outbound webhook URL to disallow unsafe protocols or private addresses
function isSafeExternalWebhookUrl(rawUrl: string): boolean {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
      return false;
    }
    const host = parsed.hostname.toLowerCase();
    if (
      host === 'localhost' ||
      host === '127.0.0.1' ||
      host === '::1' ||
      host === '169.254.169.254' ||
      host.startsWith('10.') ||
      host.startsWith('192.168.') ||
      /^172\.(1[6-9]|2\d|3[01])\./.test(host)
    ) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

const MAX_BUFFERED_LEADS = 500;
const storedEnquiries: EnquiryRecord[] = [];

export function getHealthPayload() {
  const uptime = Math.floor(process.uptime());
  return {
    status: 'ok',
    service: 'ST Constructions Corporate Portal API',
    flagshipProject: 'Narayani Villa, Lucknow',
    uptime,
    uptimeSeconds: uptime,
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    leadAdapterConfigured: Boolean(
      process.env.WEB3FORMS_ACCESS_KEY || process.env.CRM_WEBHOOK_URL
    )
  };
}

/**
 * Health check endpoint
 * GET /api/health
 */
apiRouter.get('/health', (_req: Request, res: Response) => {
  res.status(200).json(getHealthPayload());
});

/**
 * Lead enquiry submission endpoint
 * POST /api/enquiries
 */
apiRouter.post('/enquiries', rateLimitMiddleware, async (req: Request, res: Response) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      emailAddress,
      enquiryTopic,
      message,
      subject,
      reference_id,
      consentGiven,
      _hp
    } = req.body || {};

    const resolvedEmail = email || emailAddress || '';

    // Spam honeypot check
    if (_hp && typeof _hp === 'string' && _hp.trim().length > 0) {
      console.warn(`[Spam Guard] Rejected honeypot submission from IP ${req.ip}`);
      res.status(400).json({
        success: false,
        error: 'Invalid submission detected.'
      });
      return;
    }

    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    const cleanPhone = String(phoneNumber || '').replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+?91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    if (resolvedEmail && typeof resolvedEmail === 'string' && resolvedEmail.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(resolvedEmail.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!enquiryTopic || typeof enquiryTopic !== 'string' || enquiryTopic.trim().length === 0) {
      errors.enquiryTopic = 'Please select a valid enquiry topic.';
    }

    if (consentGiven !== true) {
      errors.consentGiven = 'Consent to be contacted regarding your enquiry is required.';
    }

    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        errors,
        error: 'Please fix the highlighted fields.'
      });
      return;
    }

    const leadId =
      typeof reference_id === 'string' && reference_id.trim()
        ? reference_id.trim().slice(0, 40)
        : `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`;

    const enquiryRecord: EnquiryRecord = {
      id: leadId,
      fullName: fullName.trim().slice(0, 120),
      phoneNumber: cleanPhone,
      email: resolvedEmail ? String(resolvedEmail).trim().slice(0, 160) : null,
      enquiryTopic: enquiryTopic.trim().slice(0, 160),
      message: message && typeof message === 'string' ? message.trim().slice(0, 1000) : null,
      consentGiven: true,
      submittedAt: new Date().toISOString(),
      clientIp: req.ip || 'unknown'
    };

    if (storedEnquiries.length >= MAX_BUFFERED_LEADS) {
      storedEnquiries.shift();
    }
    storedEnquiries.push(enquiryRecord);
    console.log(
      `[Lead Received] ${enquiryRecord.id} for "${enquiryRecord.enquiryTopic}" from ${enquiryRecord.fullName}`
    );

    let deliveryStatus = 'buffered_locally';
    let adapterNote =
      'Lead recorded on server. Configure WEB3FORMS_ACCESS_KEY or CRM_WEBHOOK_URL for external delivery.';

    // 1. Server-side Web3Forms forwarding (keeps access key strictly on server)
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey && web3FormsKey.trim()) {
      try {
        const w3fPayload = {
          access_key: web3FormsKey.trim(),
          from_name: 'ST Constructions Website Lead',
          subject:
            (typeof subject === 'string' && subject.trim()) ||
            `New Lead: ${enquiryRecord.enquiryTopic} - ${enquiryRecord.fullName}`,
          name: enquiryRecord.fullName,
          email: enquiryRecord.email || 'no-email@stconstructionsgroup.com',
          phone: enquiryRecord.phoneNumber,
          enquiry_topic: enquiryRecord.enquiryTopic,
          message:
            enquiryRecord.message ||
            `Lead submitted from ST Constructions web portal for ${enquiryRecord.enquiryTopic}. Phone: ${enquiryRecord.phoneNumber} | Ref: ${enquiryRecord.id}`,
          timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        };

        const w3fResponse = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(w3fPayload)
        });

        if (w3fResponse.ok) {
          deliveryStatus = 'delivered_to_email';
          adapterNote = 'Lead registered and delivered via Web3Forms.';
        } else {
          deliveryStatus = 'email_adapter_failed';
          adapterNote = 'Lead buffered safely on server; Web3Forms returned a non-200 response.';
        }
      } catch (err: unknown) {
        const errMessage = err instanceof Error ? err.message : 'Unknown error';
        console.error('[Web3Forms Server Error]', errMessage);
        deliveryStatus = 'email_adapter_error';
        adapterNote = 'Lead buffered safely on server; error reaching Web3Forms.';
      }
    }

    // 2. Optional external CRM webhook forwarding
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.trim()) {
      if (isSafeExternalWebhookUrl(webhookUrl.trim())) {
        try {
          const webhookResponse = await fetch(webhookUrl.trim(), {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(enquiryRecord)
          });
          if (webhookResponse.ok) {
            deliveryStatus = 'delivered_to_crm';
            adapterNote = 'Lead successfully forwarded to configured CRM webhook.';
          } else {
            deliveryStatus = 'webhook_failed';
            adapterNote = 'CRM webhook returned non-200 status; buffered in local server.';
          }
        } catch (err: unknown) {
          const errMessage = err instanceof Error ? err.message : 'Unknown error';
          console.error('[CRM Webhook Error]', errMessage);
          deliveryStatus = 'webhook_error';
          adapterNote = 'Error reaching CRM webhook; buffered safely in local server.';
        }
      } else {
        console.warn('[CRM Webhook Guard] Skipped invalid or non-public CRM_WEBHOOK_URL.');
      }
    }

    res.status(201).json({
      success: true,
      leadId: enquiryRecord.id,
      message:
        'Thank you for your interest in Narayani Villa. Our project coordinator will contact you shortly.',
      deliveryStatus,
      adapterNote
    });
  } catch (error) {
    console.error('[Enquiry Handler Exception]', error);
    res.status(500).json({
      success: false,
      error:
        'An internal server error occurred while processing your request. Please try again later.'
    });
  }
});

/**
 * Unknown /api/* routes catch-all: return JSON 404, never HTML
 */
export function apiNotFoundHandler(req: Request, res: Response): void {
  res.status(404).json({
    success: false,
    error: 'API endpoint not found',
    requestedPath: req.originalUrl
  });
}

apiRouter.all('*', apiNotFoundHandler);
