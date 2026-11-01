/**
 * ST CONSTRUCTIONS - Production Node.js + Express Server
 * Designed for Hostinger Node.js / Express Web Application Hosting (Node 22.x).
 * Serves the Vite-built React SPA from dist/ and REST endpoints from /api/*.
 */
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import dotenv from 'dotenv';
import { apiRouter } from './server/api.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const rawPort = process.env.PORT || '3000';
const isSocket = typeof rawPort === 'string' && (rawPort.startsWith('/') || rawPort.startsWith('\\\\'));
const PORT = isSocket ? rawPort : parseInt(rawPort, 10) || 3000;

// Security & sensible request settings
app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true, limit: '256kb' }));

// Safe Security Headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Mount API routes BEFORE static fallback
app.use('/api', apiRouter);

// Static assets directory
const distPath = path.join(__dirname, 'dist');
const publicPath = path.join(__dirname, 'public');

// Serve Vite hashed assets with 1-year immutable caching
if (fs.existsSync(path.join(distPath, 'assets'))) {
  app.use(
    '/assets',
    express.static(path.join(distPath, 'assets'), {
      maxAge: '1y',
      immutable: true
    })
  );
}

// Serve public static files
if (fs.existsSync(publicPath)) {
  app.use(
    express.static(publicPath, {
      maxAge: '1d'
    })
  );
}

// Serve root dist files (favicon, manifest, images)
if (fs.existsSync(distPath)) {
  app.use(
    express.static(distPath, {
      maxAge: '1h',
      index: false
    })
  );

  // Client-side SPA routing fallback: serve dist/index.html for any GET not matching an asset or /api
  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next(); // Leave to API 404 handler
    }
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(indexPath);
    } else {
      res.status(503).send('Application is building. Please refresh in a moment.');
    }
  });
} else {
  // Fallback when dist is not yet built
  app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
      return res.status(404).json({ error: 'Endpoint not found' });
    }
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>ST Constructions Group - Server Active</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #043728; color: #fff; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
            .box { background: rgba(255,255,255,0.06); padding: 40px; border-radius: 24px; border: 1px solid rgba(255,255,255,0.15); max-width: 540px; }
            h1 { font-size: 24px; margin-bottom: 8px; color: #EEBF67; }
            p { font-size: 14px; opacity: 0.85; line-height: 1.6; }
            code { background: rgba(0,0,0,0.3); padding: 4px 8px; border-radius: 6px; font-size: 13px; color: #EEBF67; }
            a { color: #EEBF67; text-decoration: underline; }
          </style>
        </head>
        <body>
          <div class="box">
            <h1>ST Constructions Group</h1>
            <p>Production Express server is online on Hostinger Node.js.</p>
            <p>Run <code>npm run build</code> to compile the production React application bundle into <code>dist/</code>.</p>
            <p><a href="/api/health">Verify /api/health Status</a></p>
          </div>
        </body>
      </html>
    `);
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('[Server Unhandled Error]', err);
  if (req.path.startsWith('/api')) {
    return res.status(500).json({ success: false, error: 'Internal server error' });
  }
  res.status(500).send('Internal Server Error');
});

// Start listening (handles both Unix socket and IP/port)
const server = isSocket
  ? app.listen(PORT, () => {
      console.log(`[ST Constructions Server] Running on socket ${PORT} (PID ${process.pid})`);
    })
  : app.listen(PORT, '0.0.0.0', () => {
      console.log(`[ST Constructions Server] Running on http://0.0.0.0:${PORT} (PID ${process.pid})`);
      console.log(`[ST Constructions Server] Health endpoint: http://0.0.0.0:${PORT}/api/health`);
    });

// Graceful termination
const shutdown = (signal) => {
  console.log(`[ST Constructions Server] ${signal} signal received. Closing HTTP server.`);
  server.close(() => {
    console.log('[ST Constructions Server] HTTP server closed.');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));

