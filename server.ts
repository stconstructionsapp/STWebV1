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
const PORT = process.env.PORT || 3000;
const isProd = process.env.NODE_ENV === 'production' || fs.existsSync(path.join(__dirname, 'dist'));

app.use(express.json({ limit: '256kb' }));
app.use(express.urlencoded({ extended: true, limit: '256kb' }));

// Mount backend API router
app.use('/api', apiRouter);

if (!isProd) {
  // In development, mount Vite middleware for instant HMR
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  // In production, serve compiled static assets from dist/
  const distPath = path.join(__dirname, 'dist');
  app.use(express.static(distPath, { maxAge: '1h', index: false }));

  app.get('*', (req, res, next) => {
    if (req.path.startsWith('/api')) return next();
    const indexPath = path.join(distPath, 'index.html');
    if (fs.existsSync(indexPath)) {
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.sendFile(indexPath);
    } else {
      res.status(503).send('Application is building. Please refresh in a moment.');
    }
  });
}

app.listen(Number(PORT) || 3000, '0.0.0.0', () => {
  console.log(`[ST Constructions Server] Running on http://0.0.0.0:${PORT}`);
});
