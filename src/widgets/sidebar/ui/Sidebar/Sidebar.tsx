import {cn} from '@/shared/lib/classNames/cn';
import {ThemeSwitcher} from '@/widgets/themeSwitcher';
import {FC, useState} from 'react';
import s from './Sidebar.module.scss';

interface SidebarPT {
  className?: string;
}

export const Sidebar: FC<SidebarPT> = ({className}) => {
  const [collapsed, setCollapsed] = useState(false)
  
  const toggleCollapsed = () => setCollapsed(prev => !prev)
  
  return (
      <div className={cn(s.Sidebar, {[s.collapsed]: collapsed}, [className])}>
      <button onClick={toggleCollapsed}>toggle</button>
        <div className={s.switchers}>
          <ThemeSwitcher/>
          {/* TODO : language switcher */}
        </div>
      </div>
  );
};