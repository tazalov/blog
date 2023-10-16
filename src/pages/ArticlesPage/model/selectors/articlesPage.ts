import { StateSchema } from '@/app/providers/store';
import { ArticleViewMode } from '@/entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesViewMode = (state: StateSchema) => state.articlesPage?.view || ArticleViewMode.SMALL;

export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 8;

export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;

export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1;
