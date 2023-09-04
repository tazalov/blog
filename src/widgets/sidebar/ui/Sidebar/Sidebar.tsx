import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'src/widgets/lang-switcher';
import { ThemeSwitcher } from 'src/widgets/theme-switcher';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Sidebar.module.scss';

interface SidebarPT {
  className?: string;
}

export const Sidebar: FC<SidebarPT> = ({ className }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => setCollapsed((prev) => !prev);

  const { t } = useTranslation();

  return (
    <div className={cn(s.Sidebar, { [s.collapsed]: collapsed }, [className])}>
      <button type="button" onClick={toggleCollapsed}>{t('Toggle')}</button>
      <div className={s.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={s.lang} />
      </div>
    </div>
  );
};
