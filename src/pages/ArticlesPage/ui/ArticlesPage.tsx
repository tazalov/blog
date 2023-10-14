import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
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

  useInitialEffect(() => {
    dispatch(fetchArticlesList());
  });

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.ArticlesPage, {}, [])}>
        {t('ArticlesPage')}
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
