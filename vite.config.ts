import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig(() => {
    return {
        plugins: [
            // https://react.dev/
            react(),
        ],

        server: {
            port: 8000,
        },
    };
});
