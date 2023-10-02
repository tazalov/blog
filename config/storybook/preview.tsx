import type { Preview } from '@storybook/react';
import { withThemeByClassName } from '@storybook/addon-styling';
import {
  RouterDecorator,
} from '@/shared/config/storybook/RouterDecorator/RouterDecorator';
import {
  StoreDecorator,
} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import '@/app/styles/index.scss';
// ? Не работают loki тесты с этим декоратором, если захочешь потом, чтобы он был в сторибуке
// ? отключи ui тесты и локально и в ci
/* import {
  TranslationDecorator,
} from '@/shared/config/storybook/TranslationDecorator/TranslationDecorator'; */

const ThemeDec = withThemeByClassName({
  themes: {
    light_theme: 'app_light_theme',
    dark_theme: 'app_dark_theme',
  },
  defaultTheme: 'light_theme',
  parentSelector: 'body',
});

const preview: Preview = {
  parameters: {
    controls: { expanded: true },
  },
  decorators: [
    StoreDecorator({
      loginForm: { username: 'asd', password: 'asd' },
    }),
    RouterDecorator,
    /*    TranslationDecorator, */
    // @ts-ignore
    ThemeDec,
  ],
};

export default preview;
