/**
 * ST CONSTRUCTIONS - Modular Express Application Factory
 * Supports both Vite dev middleware mode and production static SPA serving.
 */
import express, { Express, Request, Response, NextFunction } from 'express';
import fs from 'fs';
import path from 'path';
import type { ViteDevServer } from 'vite';
import { apiRouter, apiNotFoundHandler, getHealthPayload } from './api.ts';

export interface CreateAppOptions {
  isDev: boolean;
  viteServer?: ViteDevServer;
}

export async function createApp({ isDev, viteServer }: CreateAppOptions): Promise<Express> {
  const app = express();

  app.disable('x-powered-by');
  app.set('trust proxy', 1);

  // Body parsers
  app.use(express.json({ limit: '2mb' }));
  app.use(express.urlencoded({ extended: true, limit: '2mb' }));

  // Security headers
  app.use((_req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    next();
  });

  // Top-level & API health endpoints
  app.get('/health', (_req: Request, res: Response) => {
    res.status(200).json(getHealthPayload());
  });

  // Mount backend API routes BEFORE static/SPA fallbacks
  app.use('/api', apiRouter);

  // Ensure unmatched /api/* routes return JSON 404
  app.use('/api/*', apiNotFoundHandler);

  const distPath = path.resolve(process.cwd(), 'dist');
  const publicPath = path.resolve(process.cwd(), 'public');

  if (isDev && viteServer) {
    // Development mode: mount Vite middleware (handles src/ HMR, public/, and SPA index.html)
    app.use(viteServer.middlewares);
  } else {
    // Production mode: serve Vite-compiled dist/ and public/ with SPA fallback
    const assetsPath = path.join(distPath, 'assets');
    if (fs.existsSync(assetsPath)) {
      app.use(
        '/assets',
        express.static(assetsPath, {
          maxAge: '1y',
          immutable: true
        })
      );
    }

    if (fs.existsSync(distPath)) {
      app.use(
        express.static(distPath, {
          index: false,
          maxAge: '1d'
        })
      );
    }

    if (fs.existsSync(publicPath)) {
      app.use(
        express.static(publicPath, {
          maxAge: '1d'
        })
      );
    }

    app.get('*', (req: Request, res: Response, next: NextFunction) => {
      if (req.path.startsWith('/api')) {
        return next();
      }
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.sendFile(indexPath);
      } else {
        res.status(503).send('Application build not found. Run "npm run build" first.');
      }
    });
  }

  // Centralized error handler (hides stack traces in production)
  app.use((err: unknown, req: Request, res: Response, _next: NextFunction) => {
    const isProdEnv = process.env.NODE_ENV === 'production' || !isDev;
    const message = err instanceof Error ? err.message : 'Internal server error';
    console.error('[Server Error]', err);

    if (req.path.startsWith('/api')) {
      res.status(500).json({
        success: false,
        error: isProdEnv ? 'Internal server error' : message
      });
      return;
    }

    res.status(500).send(isProdEnv ? 'Internal Server Error' : `Internal Server Error: ${message}`);
  });

  return app;
}
