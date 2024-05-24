import {defineConfig} from 'vite';
import svgr from 'vite-plugin-svgr';
import preact from '@preact/preset-vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [preact(), svgr()],
    optimizeDeps: {
        extensions: ['.css'],
        esbuildOptions: {
            plugins: [
                (await import('esbuild-sass-plugin')).sassPlugin({
                    type: 'style',
                }),
            ],
        },
    },
});
