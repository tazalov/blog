import type { Preview } from '@storybook/react';
import {
  RouterDecorator,
} from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
  StyleDecorator,
} from '@/shared/config/storybook/StyleDecorator/StyleDecorator';
import {
  ThemeDecorator,
} from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */
const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
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
  decorators: [
    RouterDecorator,
    ThemeDecorator,
    StyleDecorator,
  ],
};

export default preview;

/*
*
*
* (Story, context) => {
 const ThemedStory = () => {
 const { theme } = useTheme();
 const storybookTheme = context.globals.theme || theme;

 return (
 <div className={`app ${storybookTheme}`} style={{ minHeight: 0, padding: '20px' }}>
 <Story />
 </div>
 );
 };

 return (
 <BrowserRouter>
 <ThemeProvider>
 <ThemedStory />
 </ThemeProvider>
 </BrowserRouter>
 );
 }
* */
