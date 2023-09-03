import { ButtonHTMLAttributes, FC } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Button.module.scss';

export enum ButtonTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINE = 'outline',
  CLEAR = 'clear'
}

interface ButtonPT extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

export const Button: FC<ButtonPT> = ({
  className,
  theme,
  children,
  ...restProps
}) => (
  <button
    type="button"
    className={cn(s.Button, {}, [className, s[theme]])}
    {...restProps}
  >
    {children}
  </button>
);
