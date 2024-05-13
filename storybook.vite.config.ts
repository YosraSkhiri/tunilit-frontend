/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
// using Vitest with Jest-DOM and React Testing Library: https://www.youtube.com/watch?v=G-4zgIPsjkU

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    css: true,
    setupFiles: './src/test/setup.ts',
    include: ['./src/**/*.test.tsx'],
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
