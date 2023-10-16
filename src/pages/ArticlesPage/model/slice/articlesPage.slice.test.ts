import { articlesPageActions, articlesPageReducer } from './articlesPage.slice';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { ArticleViewMode, ArticleT } from '@/entities/article';
import {
  fetchArticlesList,
} from '../services/fetchArticlesList/fetchArticlesList';

Storage.prototype.getItem = jest.fn(() => ArticleViewMode.BIG);

describe('articlesPage.slice.test', () => {
  it('setView action', () => {
    const initialState: DeepPartial<ArticlesPageSchema> = {
      view: ArticleViewMode.BIG,
    };
    const newState = articlesPageReducer(
        initialState as ArticlesPageSchema,
        articlesPageActions.setView(ArticleViewMode.SMALL),
    );
    expect(newState.view).toBe(ArticleViewMode.SMALL);
  });

  it('setPage action', () => {
    const initialState: DeepPartial<ArticlesPageSchema> = {
      page: 1,
    };
    const newState = articlesPageReducer(
        initialState as ArticlesPageSchema,
        articlesPageActions.setPage(10),
    );
    expect(newState.page).toBe(10);
  });

  it('initState action with "BIG" view mode in LS', () => {
    const initialState: DeepPartial<ArticlesPageSchema> = {
      view: undefined,
      limit: undefined,
    };
    const newState = articlesPageReducer(
        initialState as ArticlesPageSchema,
        articlesPageActions.initState(),
    );
    expect(newState.view).toBe(ArticleViewMode.BIG);
    expect(newState.limit).toBe(4);
  });

  it('set isLoading, clear errors (fetchArticlesList)', () => {
    const initialState: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'some error',
    };
    const newState = articlesPageReducer(initialState as ArticlesPageSchema, fetchArticlesList.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.error).not.toBeDefined();
  });
  it('fetchArticlesList service fulfilled', () => {
    const articles = [] as ArticleT[];

    const initialState: DeepPartial<ArticlesPageSchema> = {
      isLoading: true,
      error: 'some error',
      hasMore: true,
    };
    const newState = articlesPageReducer(
        initialState as ArticlesPageSchema,
        fetchArticlesList.fulfilled(articles, '', { page: 1 }),
    );
    expect(newState.isLoading).toBeFalsy();
    expect(newState.error).not.toBeDefined();
    expect(newState.hasMore).toBeFalsy();
  });
});
