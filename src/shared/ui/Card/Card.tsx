import { memo, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardPT extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode
  theme?: CardTheme
}

export const Card = memo(
  ({
    className, children, theme = CardTheme.NORMAL, ...rest
  }: CardPT) => (
    <div className={cn(s.Card, {}, [className, s[theme]])} {...rest}>
      {children}
    </div>
  ),
);
