// server.ts
import "dotenv/config";
import fs2 from "fs";
import path2 from "path";
import { fileURLToPath } from "url";

// server/app.ts
import express2 from "express";
import fs from "fs";
import path from "path";

// server/api.ts
import express from "express";
var apiRouter = express.Router();
var ipRateLimit = /* @__PURE__ */ new Map();
var RATE_LIMIT_WINDOW_MS = 15 * 60 * 1e3;
var MAX_REQUESTS_PER_WINDOW = 10;
function rateLimitMiddleware(req, res, next) {
  const forwarded = req.headers["x-forwarded-for"];
  const forwardedIp = Array.isArray(forwarded) ? forwarded[0] : forwarded?.toString().split(",")[0].trim();
  const clientIp = forwardedIp || req.ip || req.socket?.remoteAddress || "unknown";
  const now = Date.now();
  if (ipRateLimit.size > 1e3) {
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
      error: "Too many requests. Please wait a few minutes before submitting another enquiry."
    });
    return;
  }
  record.count += 1;
  next();
}
function isSafeExternalWebhookUrl(rawUrl) {
  try {
    const parsed = new URL(rawUrl);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    const host = parsed.hostname.toLowerCase();
    if (host === "localhost" || host === "127.0.0.1" || host === "::1" || host === "169.254.169.254" || host.startsWith("10.") || host.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(host)) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}
var MAX_BUFFERED_LEADS = 500;
var storedEnquiries = [];
function getHealthPayload() {
  const uptime = Math.floor(process.uptime());
  return {
    status: "ok",
    service: "ST Constructions Corporate Portal API",
    flagshipProject: "Narayani Villa, Lucknow",
    uptime,
    uptimeSeconds: uptime,
    timestamp: (/* @__PURE__ */ new Date()).toISOString(),
    environment: process.env.NODE_ENV || "development",
    leadAdapterConfigured: Boolean(
      process.env.WEB3FORMS_ACCESS_KEY || process.env.CRM_WEBHOOK_URL
    )
  };
}
apiRouter.get("/health", (_req, res) => {
  res.status(200).json(getHealthPayload());
});
apiRouter.post("/enquiries", rateLimitMiddleware, async (req, res) => {
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
    const resolvedEmail = email || emailAddress || "";
    if (_hp && typeof _hp === "string" && _hp.trim().length > 0) {
      console.warn(`[Spam Guard] Rejected honeypot submission from IP ${req.ip}`);
      res.status(400).json({
        success: false,
        error: "Invalid submission detected."
      });
      return;
    }
    const errors = {};
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (at least 2 characters).";
    }
    const cleanPhone = String(phoneNumber || "").replace(/[\s\-\(\)]/g, "");
    const phoneRegex = /^(\+?91|0)?[6-9]\d{9}$/;
    if (!cleanPhone || !phoneRegex.test(cleanPhone)) {
      errors.phoneNumber = "Please enter a valid 10-digit Indian mobile number.";
    }
    if (resolvedEmail && typeof resolvedEmail === "string" && resolvedEmail.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(resolvedEmail.trim())) {
        errors.email = "Please enter a valid email address.";
      }
    }
    if (!enquiryTopic || typeof enquiryTopic !== "string" || enquiryTopic.trim().length === 0) {
      errors.enquiryTopic = "Please select a valid enquiry topic.";
    }
    if (consentGiven !== true) {
      errors.consentGiven = "Consent to be contacted regarding your enquiry is required.";
    }
    if (Object.keys(errors).length > 0) {
      res.status(400).json({
        success: false,
        errors,
        error: "Please fix the highlighted fields."
      });
      return;
    }
    const leadId = typeof reference_id === "string" && reference_id.trim() ? reference_id.trim().slice(0, 40) : `LEAD-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 1e3)}`;
    const enquiryRecord = {
      id: leadId,
      fullName: fullName.trim().slice(0, 120),
      phoneNumber: cleanPhone,
      email: resolvedEmail ? String(resolvedEmail).trim().slice(0, 160) : null,
      enquiryTopic: enquiryTopic.trim().slice(0, 160),
      message: message && typeof message === "string" ? message.trim().slice(0, 1e3) : null,
      consentGiven: true,
      submittedAt: (/* @__PURE__ */ new Date()).toISOString(),
      clientIp: req.ip || "unknown"
    };
    if (storedEnquiries.length >= MAX_BUFFERED_LEADS) {
      storedEnquiries.shift();
    }
    storedEnquiries.push(enquiryRecord);
    console.log(
      `[Lead Received] ${enquiryRecord.id} for "${enquiryRecord.enquiryTopic}" from ${enquiryRecord.fullName}`
    );
    let deliveryStatus = "buffered_locally";
    let adapterNote = "Lead recorded on server. Configure WEB3FORMS_ACCESS_KEY or CRM_WEBHOOK_URL for external delivery.";
    const web3FormsKey = process.env.WEB3FORMS_ACCESS_KEY;
    if (web3FormsKey && web3FormsKey.trim()) {
      try {
        const w3fPayload = {
          access_key: web3FormsKey.trim(),
          from_name: "ST Constructions Website Lead",
          subject: typeof subject === "string" && subject.trim() || `New Lead: ${enquiryRecord.enquiryTopic} - ${enquiryRecord.fullName}`,
          name: enquiryRecord.fullName,
          email: enquiryRecord.email || "no-email@stconstructionsgroup.com",
          phone: enquiryRecord.phoneNumber,
          enquiry_topic: enquiryRecord.enquiryTopic,
          message: enquiryRecord.message || `Lead submitted from ST Constructions web portal for ${enquiryRecord.enquiryTopic}. Phone: ${enquiryRecord.phoneNumber} | Ref: ${enquiryRecord.id}`,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        };
        const w3fResponse = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(w3fPayload)
        });
        if (w3fResponse.ok) {
          deliveryStatus = "delivered_to_email";
          adapterNote = "Lead registered and delivered via Web3Forms.";
        } else {
          deliveryStatus = "email_adapter_failed";
          adapterNote = "Lead buffered safely on server; Web3Forms returned a non-200 response.";
        }
      } catch (err) {
        const errMessage = err instanceof Error ? err.message : "Unknown error";
        console.error("[Web3Forms Server Error]", errMessage);
        deliveryStatus = "email_adapter_error";
        adapterNote = "Lead buffered safely on server; error reaching Web3Forms.";
      }
    }
    const webhookUrl = process.env.CRM_WEBHOOK_URL;
    if (webhookUrl && webhookUrl.trim()) {
      if (isSafeExternalWebhookUrl(webhookUrl.trim())) {
        try {
          const webhookResponse = await fetch(webhookUrl.trim(), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(enquiryRecord)
          });
          if (webhookResponse.ok) {
            deliveryStatus = "delivered_to_crm";
            adapterNote = "Lead successfully forwarded to configured CRM webhook.";
          } else {
            deliveryStatus = "webhook_failed";
            adapterNote = "CRM webhook returned non-200 status; buffered in local server.";
          }
        } catch (err) {
          const errMessage = err instanceof Error ? err.message : "Unknown error";
          console.error("[CRM Webhook Error]", errMessage);
          deliveryStatus = "webhook_error";
          adapterNote = "Error reaching CRM webhook; buffered safely in local server.";
        }
      } else {
        console.warn("[CRM Webhook Guard] Skipped invalid or non-public CRM_WEBHOOK_URL.");
      }
    }
    res.status(201).json({
      success: true,
      leadId: enquiryRecord.id,
      message: "Thank you for your interest in Narayani Villa. Our project coordinator will contact you shortly.",
      deliveryStatus,
      adapterNote
    });
  } catch (error) {
    console.error("[Enquiry Handler Exception]", error);
    res.status(500).json({
      success: false,
      error: "An internal server error occurred while processing your request. Please try again later."
    });
  }
});
function apiNotFoundHandler(req, res) {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
    requestedPath: req.originalUrl
  });
}
apiRouter.all("*", apiNotFoundHandler);

// server/app.ts
async function createApp({ isDev, viteServer }) {
  const app = express2();
  app.disable("x-powered-by");
  app.set("trust proxy", 1);
  app.use(express2.json({ limit: "2mb" }));
  app.use(express2.urlencoded({ extended: true, limit: "2mb" }));
  app.use((_req, res, next) => {
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });
  app.get("/health", (_req, res) => {
    res.status(200).json(getHealthPayload());
  });
  app.use("/api", apiRouter);
  app.use("/api/*", apiNotFoundHandler);
  const distPath = path.resolve(process.cwd(), "dist");
  const publicPath = path.resolve(process.cwd(), "public");
  if (isDev && viteServer) {
    app.use(viteServer.middlewares);
  } else {
    const assetsPath = path.join(distPath, "assets");
    if (fs.existsSync(assetsPath)) {
      app.use(
        "/assets",
        express2.static(assetsPath, {
          maxAge: "1y",
          immutable: true
        })
      );
    }
    if (fs.existsSync(distPath)) {
      app.use(
        express2.static(distPath, {
          index: false,
          maxAge: "1d"
        })
      );
    }
    if (fs.existsSync(publicPath)) {
      app.use(
        express2.static(publicPath, {
          maxAge: "1d"
        })
      );
    }
    app.get("*", (req, res, next) => {
      if (req.path.startsWith("/api")) {
        return next();
      }
      const indexPath = path.join(distPath, "index.html");
      if (fs.existsSync(indexPath)) {
        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
        res.sendFile(indexPath);
      } else {
        res.status(503).send('Application build not found. Run "npm run build" first.');
      }
    });
  }
  app.use((err, req, res, _next) => {
    const isProdEnv = process.env.NODE_ENV === "production" || !isDev;
    const message = err instanceof Error ? err.message : "Internal server error";
    console.error("[Server Error]", err);
    if (req.path.startsWith("/api")) {
      res.status(500).json({
        success: false,
        error: isProdEnv ? "Internal server error" : message
      });
      return;
    }
    res.status(500).send(isProdEnv ? "Internal Server Error" : `Internal Server Error: ${message}`);
  });
  return app;
}

// server.ts
function getCliArg(flag) {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === `--${flag}` && args[i + 1] && !args[i + 1].startsWith("-")) {
      return args[i + 1];
    }
    if (arg.startsWith(`--${flag}=`)) {
      return arg.slice(flag.length + 3);
    }
  }
  return void 0;
}
async function startServer() {
  const currentFile = path2.basename(fileURLToPath(import.meta.url));
  const distIndexExists = fs2.existsSync(path2.resolve(process.cwd(), "dist", "index.html"));
  const hasSrcDir = fs2.existsSync(path2.resolve(process.cwd(), "src"));
  const isProduction = process.env.NODE_ENV === "production" || currentFile === "server.js" && distIndexExists || !hasSrcDir;
  let viteServer;
  let isDev = !isProduction;
  if (!isProduction) {
    try {
      const { createServer } = await import("vite");
      viteServer = await createServer({
        server: {
          middlewareMode: true,
          hmr: process.env.DISABLE_HMR !== "true",
          watch: process.env.DISABLE_HMR === "true" ? null : {}
        },
        appType: "spa"
      });
    } catch (err) {
      console.warn("[ST Constructions Server] Vite unavailable; falling back to static dist/ serving.", err);
      isDev = false;
      viteServer = void 0;
    }
  }
  const app = await createApp({ isDev, viteServer });
  const rawPort = getCliArg("port") || process.env.PORT || "3000";
  const isSocket = typeof rawPort === "string" && (rawPort.startsWith("/") || rawPort.startsWith("\\\\"));
  const port = isSocket ? rawPort : parseInt(rawPort, 10) || 3e3;
  const host = getCliArg("host") || process.env.HOST || "0.0.0.0";
  const server = isSocket ? app.listen(port, () => {
    console.log(`[ST Constructions Server] Listening on socket ${port} (${isDev ? "development" : "production"})`);
  }) : app.listen(port, host, () => {
    console.log(
      `[ST Constructions Server] Running on http://${host}:${port} (${isDev ? "development" : "production"})`
    );
  });
  const shutdown = (signal) => {
    console.log(`[ST Constructions Server] ${signal} received. Shutting down gracefully...`);
    const forceExitTimer = setTimeout(() => {
      console.error("[ST Constructions Server] Forced shutdown after 10s timeout.");
      process.exit(1);
    }, 1e4);
    forceExitTimer.unref();
    server.close(async () => {
      if (viteServer) {
        try {
          await viteServer.close();
        } catch {
        }
      }
      clearTimeout(forceExitTimer);
      console.log("[ST Constructions Server] HTTP server closed cleanly.");
      process.exit(0);
    });
  };
  process.on("SIGTERM", () => shutdown("SIGTERM"));
  process.on("SIGINT", () => shutdown("SIGINT"));
}
startServer().catch((err) => {
  console.error("[ST Constructions Server] Fatal startup error:", err);
  process.exit(1);
});
