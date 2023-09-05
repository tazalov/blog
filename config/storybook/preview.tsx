import type { Preview } from '@storybook/react';
import '@/app/styles/index.scss';
import '@/app/styles/storybook/decorator.scss';
// @ts-ignore
import { ThemeProvider, useTheme } from '@/app/providers/theme';

/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */
const preview: Preview = {
  parameters: { },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'THEME',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [(Story, context) => {
    const ThemedStory = () => {
      const { theme } = useTheme();
      const storybookTheme = context.globals.theme || theme;

      return (
        <div className={`app ${storybookTheme} decorator-wrapper`}>
          <Story />
        </div>
      );
    };

    return (
      <ThemeProvider>
        <ThemedStory />
      </ThemeProvider>
    );
  }],
};

export default preview;
