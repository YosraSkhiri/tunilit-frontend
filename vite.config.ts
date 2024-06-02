/// <reference types="vitest" />
/// <reference types="vite/client" />

import dotenvExpand from 'dotenv-expand'
import vike from 'vike/plugin'
import { defineConfig, loadEnv } from 'vite'
import vercel from 'vite-plugin-vercel'

import sharedConfig from './vite.shared.config'

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
    ...sharedConfig,
    plugins: [
      ...sharedConfig.plugins!,
      vike(),
      vercel(),
    ]
  };
});
