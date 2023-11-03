import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import s from './ArticlesPage.module.scss';
import { cn } from '@/shared/lib/classNames/cn';
import { ArticleList } from '@/entities/article';
import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageReducer,
  getArticles,
} from '../../model/slice/articlesPage.slice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesViewMode,
} from '../../model/selectors/articlesPage';
import { Page } from '@/shared/ui/Page/Page';
import {
  fetchNextArticlePage,
} from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { Text } from '@/shared/ui/Text/Text';
import {
  initArticlesPage,
} from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';

const initialReducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC = ({}) => {
  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const viewMode = useSelector(getArticlesViewMode);

  const [searchParams] = useSearchParams();

  const handleLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount={false}>
      <Page handleScrollEnd={handleLoadNextPart} className={cn(s.ArticlesPage, {}, [])}>
        {error && <Text title={error} />}
        <ArticlesPageFilters />
        <ArticleList
          className={s.list}
          isLoading={isLoading}
          viewMode={viewMode}
          articles={articles}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
