import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { defineConfig } from 'vite';
import path from 'path';


export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/public/css/app.scss', 'resources/public/js/app.tsx','resources/private/css/app.scss', 'resources/private/js/app.tsx'],
            ssr: 'resources/public/js/ssr.tsx',
            refresh: true,
        }),
        react({
            babel: {
                plugins: ['babel-plugin-react-compiler'],
            },
        }),
        wayfinder({
            formVariants: true,
            path:'resources/public/js'
        }),
        wayfinder({
            formVariants: true,
            path:'resources/private/js'
        }),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {

        '@': path.resolve(__dirname, './resources/public/js'),
        '@@': path.resolve(__dirname, './resources/private/js'),

    },
  },


});
