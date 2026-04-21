import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

export default defineConfig({
    plugins: [
        vue({
            script: {
                defineModel: true
            }
        })
    ],
    server: {
        port: 5174  // Keep same dev port if you like
    },
    build: {
        outDir: 'dist-docs',          // Separate output folder
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html')
            }
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
})
