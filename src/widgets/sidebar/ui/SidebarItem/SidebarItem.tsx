import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './SidebarItem.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { SidebarItemT } from '../../model/items';
import { cn } from '@/shared/lib/classNames/cn';

interface SidebarItemPT {
  item: SidebarItemT
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemPT> = ({ item, collapsed }) => {
  const { t } = useTranslation();
  return (
    <AppLink
      data-testid="sidebar-item"
      className={cn(s.item, { [s.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
      to={item.path}
    >
      <item.Icon className={s.icon} />
      <span className={s.link}>{t(item.text)}</span>
    </AppLink>
  );
};
