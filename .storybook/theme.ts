import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  brandTitle: 'Tunilit',
  brandUrl: '#',
  brandImage: '/storybook/logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#EAE0D7',
  appContentBg: '#EFEDEA',
  appPreviewBg: '#F2ECE6',
  appBorderColor: '#854011',
  appBorderRadius: 20,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});
