/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// using Vitest with Jest-DOM and React Testing Library: https://www.youtube.com/watch?v=G-4zgIPsjkU

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts',
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use './src/sass/variables/_color-mapped.scss' as *;
          @use './src/sass/variables/_sizes-spaces.scss' as *;
        `,
      },
    },
  },
})
