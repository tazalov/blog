import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleListItem.module.scss';
import { ArticleViewMode } from '../../model/types/article';
import { Card } from '@/shared/ui/Card/Card';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonPT {
  className?: string
  viewMode:ArticleViewMode
}

export const ArticleListItemSkeleton = memo(
  ({ className, viewMode }: ArticleListItemSkeletonPT) => {
    if (viewMode === ArticleViewMode.BIG) {
      return (
        <div className={cn(s.ArticleListItem, {}, [className, s[viewMode]])}>
          <Card>
            <div className={s.header}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton width={150} height={16} className={s.userName} />
              <Skeleton width={150} height={16} className={s.date} />
            </div>
            <Skeleton width={250} height={24} className={s.title} />
            <Skeleton height={200} className={s.img} />
            <div className={s.footer}>
              <Skeleton width={200} height={36} className={s.textBlock} />
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={cn(s.ArticleListItem, {}, [className, s[viewMode]])}>
        <Card>
          <div className={s.imgWrapper}>
            <Skeleton width={300} height={300} className={s.img} />
          </div>
          <div className={s.infoWrapper}>
            <Skeleton width={130} height={16} />
          </div>
          <Skeleton width={150} height={16} className={s.title} />
        </Card>
      </div>
    );
  },
);
