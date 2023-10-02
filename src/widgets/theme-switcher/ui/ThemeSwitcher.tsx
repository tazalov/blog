import { memo } from 'react';
import { Theme, useTheme } from '@/app/providers/theme';
import { cn } from '@/shared/lib/classNames/cn';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import Dark from '@/shared/assets/icons/theme-dark.svg';
import Light from '@/shared/assets/icons/theme-light.svg';

interface ThemeSwitcherPT {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherPT) => {
  const {
    theme,
    toggleTheme,
  } = useTheme();
  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={cn('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Light />
        : <Dark />}
    </Button>
  );
});
