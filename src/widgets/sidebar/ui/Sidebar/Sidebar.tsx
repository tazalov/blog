import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui/Button/Button';
import { cn } from '@/shared/lib/classNames/cn';
import { LangSwitcher } from '@/widgets/lang-switcher';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import s from './Sidebar.module.scss';
import { AppLinkTheme, AppLink } from '@/shared/ui/AppLink/AppLink';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';

interface SidebarPT {
  className?: string;
}

export const Sidebar: FC<SidebarPT> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation();

  return (
    <div
      data-testid="sidebar"
      className={cn(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={s.items}>
        <AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
          <MainIcon className={s.icon} />
          <span className={s.link}>{t('Main')}</span>
        </AppLink>
        <AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <AboutIcon className={s.icon} />
          <span className={s.link}>{t('About')}</span>
        </AppLink>
        <AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <ProfileIcon className={s.icon} />
          <span className={s.link}>{t('About')}</span>
        </AppLink>
        <AppLink className={s.item} theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
          <ArticlesIcon className={s.icon} />
          <span className={s.link}>{t('About')}</span>
        </AppLink>
      </div>
      <Button
        data-testid="sidebar-toggle"
        type="button"
        onClick={toggleCollapsed}
        className={s.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '<' : '>'}
      </Button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </div>
  );
};
