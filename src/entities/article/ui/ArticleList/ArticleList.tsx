import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleList.module.scss';
import { ArticleT, ArticleViewMode } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import {
  ArticleListItemSkeleton,
} from '@/entities/article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';

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
    const { t } = useTranslation();

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
          : <Text size={TextSize.L} title={t('Articles not found!')} align={TextAlign.CENTER} />}
        {isLoading && getSkeletons(viewMode)}
      </div>
    );
  },
);
