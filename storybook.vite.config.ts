/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'

import sharedConfig from './vite.shared.config'
// https://vitejs.dev/config/
// using Vitest with Jest-DOM and React Testing Library: https://www.youtube.com/watch?v=G-4zgIPsjkU

export default defineConfig({
  ...sharedConfig
})
