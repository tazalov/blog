import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleList.module.scss';
import { ArticleT, ArticleViewMode } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {
  ArticleListItemSkeleton,
} from '@/entities/article/ui/ArticleListItem/ArticleListItemSkeleton';

const getSkeletons = (viewMode: ArticleViewMode) => (
  new Array(viewMode === ArticleViewMode.SMALL ? 4 : 2).fill(0).map((el, i) => (
    <ArticleListItemSkeleton
      key={i}
      viewMode={viewMode}
      className={viewMode === ArticleViewMode.BIG ? s.card : undefined}
    />
  ))
);

interface ArticleListPT {
  className?: string
  articles: ArticleT[]
  isLoading?: boolean
  viewMode?:ArticleViewMode
}

export const ArticleList = memo(
  ({
    className, articles, isLoading, viewMode = ArticleViewMode.SMALL,
  }: ArticleListPT) => {
    const renderArticles = (article: ArticleT) => (
      <ArticleListItem
        key={article.id}
        article={article}
        viewMode={viewMode}
        className={viewMode === ArticleViewMode.BIG ? s.card : undefined}
      />
    );

    return (
      <div className={cn(s.ArticleList, {}, [className, s[viewMode]])}>
        {articles.length > 0
          ? articles.map(renderArticles)
          : null}
        {isLoading && getSkeletons(viewMode)}
      </div>
    );
  },
);
