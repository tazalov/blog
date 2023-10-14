import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import s from './ArticlesPage.module.scss';
import { cn } from '@/shared/lib/classNames/cn';
import {
  ArticleList,
  ArticleViewMode,
  ArticleViewSwitcher,
} from '@/entities/article';
import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articlesPageReducer,
  getArticles,
  articlesPageActions,
} from '../model/slice/articlesPage.slice';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchArticlesList,
} from '../model/services/fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesViewMode,
} from '../model/selectors/articlesPage';

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

  const handleChangeViewMode = useCallback((viewMode: ArticleViewMode) => {
    dispatch(articlesPageActions.setView(viewMode));
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.ArticlesPage, {}, [])}>
        {t('ArticlesPage')}
        <ArticleViewSwitcher viewMode={viewMode} changeView={handleChangeViewMode} />
        <ArticleList
          isLoading={isLoading}
          viewMode={viewMode}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
