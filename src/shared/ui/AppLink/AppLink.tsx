import {cn} from '@/shared/lib/classNames/cn';
import {FC} from 'react';
import {Link, LinkProps} from 'react-router-dom';
import s from './AppLink.module.scss';

//? Тутова мы можем добавить любую тему для нашей AppLink,
//? далее нужно идти в AppLink.module.scss и внутри создать соответствующий класс
//* Там, где мы используем наш AppLink, мы импортируема данный enum и юзаем любое значение темы для нужной ссылки
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

//! Тут мы берем еще допом типы из компонента Link react-router-dom, чтобы
//! использовать to в месте, где мы вызываем AppLink, и прокинуть то, что требуется еще в Link
interface AppLinkPT extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkPT> = ({
  className,
  children,
  to,
  theme = AppLinkTheme.PRIMARY,
  ...restProps
}) => {
  return (
      <Link to={to} className={cn(s.AppLink, {}, [className, s[theme]])} {...restProps}>
        {children}
      </Link>
  );
};