import { useContext } from 'react';
import {
  LOCAL_STORAGE_THEME_KEY,
  Theme,
  ThemeContext,
} from '@/app/providers/theme/lib/ThemeContext';

export interface UseThemeReturnT {
  theme: Theme;
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnT => {
  const { theme, setTheme } = useContext(ThemeContext);

  //! Каждый раз при переключении темы где-либо, мы меняем стейт и обновляем localStorage
  const toggleTheme = () => {
    let newTheme: Theme;
    switch (theme) {
    case Theme.DARK: {
      newTheme = Theme.LIGHT;
      break;
    }
    case Theme.LIGHT: {
      newTheme = Theme.GREEN;
      break;
    }
    case Theme.GREEN: {
      newTheme = Theme.DARK;
      break;
    }
    default: {
      newTheme = Theme.LIGHT;
    }
    }
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || Theme.DARK, toggleTheme };
};
