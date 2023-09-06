import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import s from './Navbar.module.scss';

interface NavbarPT {
  className?: string;
}

export const Navbar: FC<NavbarPT> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to="/"
          className={s.mainLink}
        >
          {t('Main')}
        </AppLink>
      </div>
    </div>
  );
};
