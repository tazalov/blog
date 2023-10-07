import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Text.module.scss';

export enum TextTheme {
  NORMAL= 'normal',
  ERROR = 'error'
}

export enum TextAlign {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center'
}

interface TextPT {
  className?: string;
  title?: string
  text?: string
  theme?: TextTheme
  align?:TextAlign
}

export const Text = memo(({
  className, title, text, theme = TextTheme.NORMAL, align = TextAlign.LEFT,
}: TextPT) => (
  <div className={cn(s.Text, {}, [className, s[theme], s[align]])}>
    {title && <p className={s.title}>{title}</p>}
    {text && <p className={s.text}>{text}</p>}
  </div>
));
