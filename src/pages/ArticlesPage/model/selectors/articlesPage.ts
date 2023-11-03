import { StateSchema } from '@/app/providers/store';
import {
  ArticleViewMode,
  ArticleSortField,
  ArticleType,
} from '@/entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesViewMode = (state: StateSchema) => state.articlesPage?.view || ArticleViewMode.SMALL;

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 8;

export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;

export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited;

export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';

export const getArticlesPageSort = (state: StateSchema) => (
  state.articlesPage?.sort ?? ArticleSortField.CREATED
);

export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';

export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
