import path from 'node:path';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import AutoImport from 'unplugin-auto-import/vite';
import { defineConfig, loadEnv } from 'vite';
import Pages from 'vite-plugin-pages';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = { ...process.env, ...loadEnv(mode, `${process.cwd()}/environments`, '') };
    const port = !Number.isNaN(Number(env.VITE_APP_PORT)) ? Number(env.VITE_APP_PORT) : 8000;

    return {
        envDir: './environments',
        resolve: {
            alias: {
                '@': path.resolve(__dirname, 'src'),
                '@root': path.resolve(__dirname),
            },
        },
        server: {
            port,
            strictPort: true,
        },

        plugins: [
            Pages({
                dirs: [
                    {
                        dir: 'src/common/pages',
                        baseRoute: '',
                        filePattern: '**/*.page.tsx',
                    },
                    {
                        dir: 'src/features/**/pages',
                        baseRoute: '',
                        filePattern: '**/*.page.tsx',
                    },
                ],
                extensions: ['page.tsx'],
                importMode: 'sync',
                resolver: 'react',
                routeStyle: 'next',
            }),

            // https://github.com/react/react
            react(),

            // https://github.com/unplugin/unplugin-auto-import
            AutoImport({
                include: [
                    /\.[jt]sx?$/,
                ],
                imports: [
                    'react',
                    'react-router-dom',
                    'react-i18next',
                    {
                        'zod': ['string', 'number', 'boolean', 'object', 'array', 'union', 'literal', ['enum', 'zEnum'], 'date', 'unknown', 'any', 'nullable', 'undefined', ['void', 'zVoid'], 'never'],
                        'axios': [['default', 'axiosDefault'], 'axios'],
                        '@tanstack/react-query': ['useQuery', 'useMutation', 'useInfiniteQuery', 'useQueries', 'useQueryClient'],
                        'react-hook-form': ['useForm', 'Controller', 'useController'],
                        '@hookform/resolvers/zod': ['zodResolver'],
                        'lodash-es': ['debounce', 'throttle'],
                        'clsx': ['clsx'],
                        'class-variance-authority': ['cva'],
                        'tailwind-merge': ['twMerge'],
                        'zustand': ['create'],
                        'date-fns': ['format', 'parseISO', 'addDays', 'subDays'],
                    },
                ],
                dts: 'auto-import.d.ts',
                dirs: [
                    'src/common/builders/**',
                    'src/common/hooks/**',
                    'src/common/constants/**',
                    'src/common/types/**',
                    'src/common/endpoints/**',
                    'src/common/exceptions/**',
                    'src/common/stores/**',
                    'src/common/services/**',
                    'src/common/utils/**',

                    'src/features/**/builders/**',
                    'src/features/**/hooks/**',
                    'src/features/**/constants/**',
                    'src/features/**/types/**',
                    'src/features/**/endpoints/**',
                    'src/features/**/exceptions/**',
                    'src/features/**/stores/**',
                    'src/features/**/services/**',
                    'src/features/**/utils/**',
                ],
                vueTemplate: false,
            }),

            // https://github.com/tailwindlabs/tailwindcss
            tailwindcss(),
        ],
    };
});
