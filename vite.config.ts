/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import dotenvExpand from 'dotenv-expand'
import vike from 'vike/plugin'
import { defineConfig, loadEnv } from 'vite'

// https://vitejs.dev/config/
// using Vitest with Jest-DOM and React Testing Library: https://www.youtube.com/watch?v=G-4zgIPsjkU

// https://github.com/vercel/storage/tree/main/packages/postgres#a-note-for-vite-users
export default defineConfig(({ mode }) => {
  // This check is important!
  if (mode === 'development') {
    const env = loadEnv(mode, process.cwd(), '');
    dotenvExpand.expand({ parsed: env });
  }

  return {
    plugins: [react(), vike()],
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
  };
});
