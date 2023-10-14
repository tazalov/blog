import { StateSchema } from '@/app/providers/store';
import { ArticleViewMode } from '@/entities/article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;

export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesViewMode = (state: StateSchema) => state.articlesPage?.view || ArticleViewMode.SMALL;
