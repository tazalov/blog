import { useMemo, useState, memo } from 'react';
import { Button, ButtonTheme, ButtonSize } from '@/shared/ui/Button/Button';
import { cn } from '@/shared/lib/classNames/cn';
import { LangSwitcher } from '@/widgets/lang-switcher';
import { ThemeSwitcher } from '@/widgets/theme-switcher';
import s from './Sidebar.module.scss';
import { SidebarItemsList } from '@/widgets/sidebar/model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarPT {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarPT) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const itemsList = useMemo(() => SidebarItemsList.map((el) => (
    <SidebarItem key={el.path} item={el} collapsed={collapsed} />
  )), [collapsed]);

  return (
    <div
      data-testid="sidebar"
      className={cn(s.Sidebar, { [s.collapsed]: collapsed }, [className])}
    >
      <div className={s.items}>
        {itemsList}
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
});
