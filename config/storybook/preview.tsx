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
import {
  StoreDecorator,
} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'app_light_theme',
      toolbar: {
        title: 'THEME',
        icon: 'circlehollow',
        items: ['app_light_theme', 'app_dark_theme'],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    StoreDecorator,
    RouterDecorator,
    ThemeDecorator,
    StyleDecorator,
  ],
};

export default preview;
