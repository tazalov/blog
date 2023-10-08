import { createContext } from 'react';

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
  GREEN = 'app_green_theme'
}

export interface ThemeContextPT {
  theme? : Theme;
  setTheme? : (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextPT>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
