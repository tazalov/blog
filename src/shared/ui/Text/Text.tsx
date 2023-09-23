import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Text.module.scss';

export enum TextTheme {
  NORMAL= 'normal',
  ERROR = 'error'
}

interface TextPT {
  className?: string;
  title?: string
  text?: string
  theme?: TextTheme
}

export const Text: FC<TextPT> = ({
  className, title, text, theme = TextTheme.NORMAL,
}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.Text, {}, [className, s[theme]])}>
      {title && <p className={s.title}>{title}</p>}
      {text && <p className={s.text}>{text}</p>}
    </div>
  );
};
