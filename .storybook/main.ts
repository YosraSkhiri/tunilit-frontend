import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],

  core: {},

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-a11y",
    "@chromatic-com/storybook"
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {
      builder: {
        viteConfigPath: "./storybook.vite.config.ts"
      }
    },
  },

  docs: {
    defaultName: 'Documentation'
  },

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
