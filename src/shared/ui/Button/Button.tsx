import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl'
}

interface ButtonPT extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
  disabled?: boolean
  children: ReactNode
}

export const Button = memo(({
  className = '',
  theme = ButtonTheme.PRIMARY,
  children,
  square = false,
  size = ButtonSize.L,
  disabled = false,
  ...restProps
}: ButtonPT) => {
  const mods = {
    [s.square]: square,
    [s.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={cn(s.Button, mods, [className, s[theme], s[size]])}
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
});
