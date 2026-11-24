/**
 * ST CONSTRUCTIONS - Unified Express Entry File
 * Compiled to root server.js via esbuild for Hostinger Node.js Hosting,
 * and executed directly via tsx in development mode.
 */
import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { ViteDevServer } from 'vite';
import { createApp } from './server/app.ts';

function getCliArg(flag: string): string | undefined {
  const args = process.argv.slice(2);
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === `--${flag}` && args[i + 1] && !args[i + 1].startsWith('-')) {
      return args[i + 1];
    }
    if (arg.startsWith(`--${flag}=`)) {
      return arg.slice(flag.length + 3);
    }
  }
  return undefined;
}

async function startServer() {
  const currentFile = path.basename(fileURLToPath(import.meta.url));
  const distIndexExists = fs.existsSync(path.resolve(process.cwd(), 'dist', 'index.html'));
  const hasSrcDir = fs.existsSync(path.resolve(process.cwd(), 'src'));

  // Use production static serving when NODE_ENV=production, when running bundled server.js with dist/, or when src/ is absent
  const isProduction =
    process.env.NODE_ENV === 'production' ||
    (currentFile === 'server.js' && distIndexExists) ||
    !hasSrcDir;

  let viteServer: ViteDevServer | undefined;
  let isDev = !isProduction;

  if (!isProduction) {
    try {
      const { createServer } = await import('vite');
      viteServer = await createServer({
        server: {
          middlewareMode: true,
          hmr: process.env.DISABLE_HMR !== 'true',
          watch: process.env.DISABLE_HMR === 'true' ? null : {}
        },
        appType: 'spa'
      });
    } catch (err) {
      console.warn('[ST Constructions Server] Vite unavailable; falling back to static dist/ serving.', err);
      isDev = false;
      viteServer = undefined;
    }
  }

  const app = await createApp({ isDev, viteServer });

  const rawPort = getCliArg('port') || process.env.PORT || '3000';
  const isSocket = typeof rawPort === 'string' && (rawPort.startsWith('/') || rawPort.startsWith('\\\\'));
  const port = isSocket ? rawPort : parseInt(rawPort, 10) || 3000;
  const host = getCliArg('host') || process.env.HOST || '0.0.0.0';

  const server = isSocket
    ? app.listen(port, () => {
        console.log(`[ST Constructions Server] Listening on socket ${port} (${isDev ? 'development' : 'production'})`);
      })
    : app.listen(port as number, host, () => {
        console.log(
          `[ST Constructions Server] Running on http://${host}:${port} (${isDev ? 'development' : 'production'})`
        );
      });

  const shutdown = (signal: string) => {
    console.log(`[ST Constructions Server] ${signal} received. Shutting down gracefully...`);
    const forceExitTimer = setTimeout(() => {
      console.error('[ST Constructions Server] Forced shutdown after 10s timeout.');
      process.exit(1);
    }, 10000);
    forceExitTimer.unref();

    server.close(async () => {
      if (viteServer) {
        try {
          await viteServer.close();
        } catch {
          // Ignore Vite close errors on shutdown
        }
      }
      clearTimeout(forceExitTimer);
      console.log('[ST Constructions Server] HTTP server closed cleanly.');
      process.exit(0);
    });
  };

  process.on('SIGTERM', () => shutdown('SIGTERM'));
  process.on('SIGINT', () => shutdown('SIGINT'));
}

startServer().catch((err) => {
  console.error('[ST Constructions Server] Fatal startup error:', err);
  process.exit(1);
});
