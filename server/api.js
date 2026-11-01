/**
 * ST CONSTRUCTIONS - Backend API Router
 * Handles /api/health, /api/enquiries with validation, rate limiting, and lead adapter.
 */
import express from 'express';

export const apiRouter = express.Router();

// Memory store for rate limiting (max 10 requests per 15 min per IP)
const ipRateLimit = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 10;

function rateLimitMiddleware(req, res, next) {
  const clientIp = req.headers['x-forwarded-for']?.toString().split(',')[0].trim() || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  
  const record = ipRateLimit.get(clientIp);
  if (!record || now - record.startTime > RATE_LIMIT_WINDOW_MS) {
    ipRateLimit.set(clientIp, { count: 1, startTime: now });
    return next();
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return res.status(429).json({
      success: false,
      error: 'Too many requests. Please wait a few minutes before submitting another enquiry.'
    });
  }

  record.count += 1;
  next();
}

// In-memory lead buffer for demonstration & logging
const storedEnquiries = [];

/**
 * Health check endpoint
 * GET /api/health
 */
apiRouter.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    service: 'ST Constructions Corporate Portal API',
    flagshipProject: 'Narayani Villa, Lucknow',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: process.env.NODE_ENV || 'development',
    leadAdapterConfigured: Boolean(process.env.CRM_WEBHOOK_URL || process.env.SMTP_HOST)
  });
});

/**
 * Lead enquiry submission endpoint
 * POST /api/enquiries
 */
apiRouter.post('/enquiries', rateLimitMiddleware, async (req, res) => {
  try {
    const {
      fullName,
      phoneNumber,
      email,
      enquiryTopic,
      message,
      consentGiven,
      _hp // Honeypot field
    } = req.body;

    // Spam honeypot check: If the hidden honeypot field is filled, silently discard or reject
    if (_hp && _hp.trim().length > 0) {
      console.warn(`[Spam Guard] Rejected honeypot submission from IP ${req.ip}`);
      return res.status(400).json({
        success: false,
        error: 'Invalid submission detected.'
      });
    }

    // Validation
    const errors = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 2) {
      errors.fullName = 'Please enter your full name (at least 2 characters).';
    }

    // Validate phone number: Indian formats or international format
    // Accepts 10 digits, +91-XXXXXXXXXX, 0XXXXXXXXXX
    const cleanPhone = (phoneNumber || '').replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^(\+?91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phoneNumber = 'Please enter a valid 10-digit Indian mobile number.';
    }

    // Validate optional email
    if (email && typeof email === 'string' && email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        errors.email = 'Please enter a valid email address.';
      }
    }

    if (!enquiryTopic || typeof enquiryTopic !== 'string' || enquiryTopic.trim().length === 0) {
      errors.enquiryTopic = 'Please select a valid enquiry topic.';
    }

    if (!consentGiven || consentGiven !== true) {
      errors.consentGiven = 'Consent to be contacted regarding your enquiry is required.';
    }

    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        errors,
        error: 'Please fix the highlighted fields.'
      });
    }

    const enquiryRecord = {
      id: `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1000)}`,
      fullName: fullName.trim(),
      phoneNumber: cleanPhone,
      email: email ? email.trim() : null,
      enquiryTopic,
      message: message ? message.trim().slice(0, 1000) : null,
      consentGiven: true,
      submittedAt: new Date().toISOString(),
      clientIp: req.ip || 'unknown'
    };

    storedEnquiries.push(enquiryRecord);
    console.log(`[Lead Received] ${enquiryRecord.id} for "${enquiryRecord.enquiryTopic}" from ${enquiryRecord.fullName}`);

    // Check if an external webhook or CRM is configured
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    let deliveryStatus = 'buffered_locally';
    let adapterNote = 'Lead recorded in local server queue. External CRM/Email adapter not configured in environment variables.';

    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
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
      } catch (err) {
        console.error('[CRM Webhook Error]', err.message);
        deliveryStatus = 'webhook_error';
        adapterNote = 'Error reaching CRM webhook; buffered safely in local server.';
      }
    }

    return res.status(201).json({
      success: true,
      leadId: enquiryRecord.id,
      message: 'Thank you for your interest in Narayani Villa. Our project coordinator will contact you shortly.',
      deliveryStatus,
      adapterNote
    });
  } catch (error) {
    console.error('[Enquiry Handler Exception]', error);
    return res.status(500).json({
      success: false,
      error: 'An internal server error occurred while processing your request. Please try again later.'
    });
  }
});

// Unknown /api/* routes catch-all: return JSON 404, never HTML
apiRouter.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'API endpoint not found',
    requestedPath: req.originalUrl
  });
});
