import { StateSchema } from '@/app/providers/store';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesViewMode = (state: StateSchema) => state.articlesPage?.view;
