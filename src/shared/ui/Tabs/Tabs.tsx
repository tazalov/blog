import { memo, ReactNode, useCallback } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Tabs.module.scss';
import { Card, CardTheme } from '@/shared/ui/Card/Card';

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsPT {
  className?: string;
  tabs: TabItem[]
  value: string
  handleTabClick: (tab: TabItem) => void
}

export const Tabs = memo(
  ({
    className, tabs, handleTabClick, value,
  }: TabsPT) => {
    const handleClick = useCallback((tab: TabItem) => () => {
      handleTabClick(tab);
    }, [handleTabClick]);

    return (
      <div className={cn(s.Tabs, {}, [className])}>
        {tabs.map((el) => (
          <Card
            className={s.tab}
            key={el.value}
            theme={el.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            onClick={handleClick(el)}
          >
            {el.content}
          </Card>
        ))}
      </div>
    );
  },
);
