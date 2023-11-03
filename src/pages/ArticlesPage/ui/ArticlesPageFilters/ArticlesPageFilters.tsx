import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticlesPageFilters.module.scss';
import {
  ArticleViewMode,
  ArticleViewSwitcher,
  ArticleSortSelect,
  ArticleSortField,
  ArticleTypeTabs,
} from '@/entities/article';
import { articlesPageActions } from '../../model/slice/articlesPage.slice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  getArticlesViewMode,
  getArticlesPageSort,
  getArticlesPageSearch,
  getArticlesPageOrder,
  getArticlesPageType,
} from '../../model/selectors/articlesPage';
import { Card } from '@/shared/ui/Card/Card';
import { Input } from '@/shared/ui/Input/Input';
import { SortOrder } from '@/shared/types';
import {
  fetchArticlesList,
} from '../../model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { ArticleType } from '@/entities/article/model/types/article';

interface ArticlesPageFiltersPT {
  className?: string;
}

export const ArticlesPageFilters = memo(
  ({ className }: ArticlesPageFiltersPT) => {
    const { t } = useTranslation();
    const viewMode = useSelector(getArticlesViewMode);
    const sort = useSelector(getArticlesPageSort);
    const search = useSelector(getArticlesPageSearch);
    const order = useSelector(getArticlesPageOrder);
    const type = useSelector(getArticlesPageType);

    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
      dispatch(fetchArticlesList({ page: 1, replace: true }));
    }, [dispatch]);

    const fetchDataDebounced = useDebounce(fetchData, 500);

    const handleChangeViewMode = useCallback((viewMode: ArticleViewMode) => {
      dispatch(articlesPageActions.setView(viewMode));
    }, [dispatch]);

    const handleChangeOrder = useCallback((order: SortOrder) => {
      dispatch(articlesPageActions.setOrder(order));
      dispatch(articlesPageActions.setPage(1));
      fetchDataDebounced();
    }, [dispatch, fetchDataDebounced]);

    const handleChangeSort = useCallback((sort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(sort));
      dispatch(articlesPageActions.setPage(1));
      fetchDataDebounced();
    }, [dispatch, fetchDataDebounced]);

    const handleChangeSearch = useCallback((searchValue: string) => {
      dispatch(articlesPageActions.setSearch(searchValue));
      dispatch(articlesPageActions.setPage(1));
      fetchDataDebounced();
    }, [dispatch, fetchDataDebounced]);

    const handleChangeType = useCallback((value: ArticleType) => {
      dispatch(articlesPageActions.setType(value));
      fetchData();
    }, [dispatch, fetchData]);

    return (
      <div className={cn(s.ArticlesPageFilters, {}, [className])}>
        <div className={s.sortWrapper}>
          <ArticleSortSelect
            sort={sort}
            order={order}
            onChangeOrder={handleChangeOrder}
            onChangeSort={handleChangeSort}
          />
          <ArticleViewSwitcher viewMode={viewMode} changeView={handleChangeViewMode} />
        </div>
        <Card className={s.search}>
          <Input placeholder={t('Search')} value={search} onChange={handleChangeSearch} />
        </Card>
        <ArticleTypeTabs className={s.types} value={type} handleTabChange={handleChangeType} />
      </div>
    );
  },
);
