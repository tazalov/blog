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
// ? Не работают loki тесты с этим декоратором, если захочешь потом, чтобы он был в сторибуке
// ? отключи ui тесты и локально и в ci
/* import {
  TranslationDecorator,
} from '@/shared/config/storybook/TranslationDecorator/TranslationDecorator'; */

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
        items: [
          { value: 'app_light_theme', title: 'Light' },
          { value: 'app_dark_theme', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
    /*    locale: {
      description: 'Internationalization locale',
      defaultValue: 'en',
      toolbar: {
        title: 'LANG',
        icon: 'globe',
        items: [
          { value: 'en', title: 'English' },
          { value: 'ru', title: 'Русский' },
        ],
        dynamicTitle: true,
      },
    }, */
  },
  decorators: [
    StoreDecorator({
      loginForm: { username: 'asd', password: 'asd' },
    }),
    RouterDecorator,
    /*    TranslationDecorator, */
    ThemeDecorator,
    StyleDecorator,
  ],
};

export default preview;
