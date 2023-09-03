import { FC } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarPT {
  className?: string;
}

export const Navbar: FC<NavbarPT> = ({ className }) => (
  <div className={cn(s.Navbar, {}, [className])}>
    <div className={s.links}>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={s.mainLink}>about</AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={s.mainLink}>main</AppLink>
    </div>
  </div>
);
