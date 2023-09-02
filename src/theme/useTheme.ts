import {useContext} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';

export interface UseThemeReturnT {
  theme: Theme;
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturnT => {
  const {theme, setTheme} = useContext(ThemeContext)
  
  //! Каждый раз при переключении темы где-либо, мы меняем стейт и обновляем localStorage
  const toggleTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
  
  return {theme, toggleTheme}
}