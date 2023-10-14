import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleViewSwitcher.module.scss';
import { ArticleViewMode } from '@/entities/article';
import TiledIcon from '@/shared/assets/icons/tiled-24-24.svg';
import ListIcon from '@/shared/assets/icons/list-24-24.svg';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';

interface ArticleViewSwitcherPT {
  className?: string
  viewMode: ArticleViewMode
  changeView?: (view: ArticleViewMode) => void
}

export const ArticleViewSwitcher = memo(
  ({ className, viewMode, changeView }: ArticleViewSwitcherPT) => {
    const viewTypesArray = [
      {
        view: ArticleViewMode.SMALL,
        icon: TiledIcon,
      },
      {
        view: ArticleViewMode.BIG,
        icon: ListIcon,
      },
    ];

    const handleClick = (newViewMode: ArticleViewMode) => () => {
      changeView?.(newViewMode);
    };

    return (
      <div className={cn(s.ArticleViewSwitcher, {}, [className])}>
        {viewTypesArray.map((el, i) => (
          <Button key={i} theme={ButtonTheme.CLEAR} onClick={handleClick(el.view)}>
            <Icon Svg={el.icon} className={cn('', { [s.selected]: el.view !== viewMode })} />
          </Button>
        ))}
      </div>
    );
  },
);
