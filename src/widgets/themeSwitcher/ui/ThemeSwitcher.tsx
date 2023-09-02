import {Theme, useTheme} from '@/app/providers/theme';
import {cn} from '@/shared/lib/classNames/cn';
import {Button, ButtonTheme} from '@/shared/ui/Button/Button';
import Dark from '@/widgets/themeSwitcher/assets/icons/theme-dark.svg';
import Light from '@/widgets/themeSwitcher/assets/icons/theme-light.svg';
import {FC} from 'react';
import s from './ThemeSwitcher.module.scss';

interface ThemeSwitcherPT {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherPT> = ({className}) => {
  const {
    theme,
    toggleTheme,
  } = useTheme();
  return (
      <Button theme={ButtonTheme.CLEAR}
              className={cn(s.ThemeSwitcher, {}, [className])}
              onClick={toggleTheme}>{theme === Theme.LIGHT ? <Light/> :
          <Dark/>}</Button>
  );
};