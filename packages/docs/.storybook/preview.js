import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import { themes } from '@storybook/theming'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, defaultTheme } from '@desystem-ui/react';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.dark
    }
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: defaultTheme,
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles,
  })
];

export default preview;
