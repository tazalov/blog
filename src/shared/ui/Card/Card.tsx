import { memo, ReactNode, HTMLAttributes } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Card.module.scss';

interface CardPT extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode
}

export const Card = memo(
  ({ className, children, ...rest }: CardPT) => (
    <div className={cn(s.Card, {}, [className])} {...rest}>
      {children}
    </div>
  ),
);
