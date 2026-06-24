import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = { ...process.env, ...loadEnv(mode, `${process.cwd()}/environments`, '') };
    const port = !Number.isNaN(Number(env.VITE_APP_PORT)) ? Number(env.VITE_APP_PORT) : 8000;

    return {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@root': path.resolve(__dirname),
            },
        },

        plugins: [
            // https://react.dev/
            react(),
        ],

        server: {
            port,
            strictPort: true,
        },
    };
});
