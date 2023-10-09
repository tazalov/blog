import { ArticleDetailsSchema } from '@/entities/article';
import { article } from '../const/tests/article';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from './articleDetails.slice';

describe('articleDetails.slice.test', () => {
  it('set isLoading, clear errors (fetchArticleById)', () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      data: article,
      isLoading: false,
      error: 'Some error',
    };
    const newState = articleDetailsReducer(initialState as ArticleDetailsSchema, fetchArticleById.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.error).not.toBeDefined();
  });
  it('fetch article service fulfilled', () => {
    const initialState: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: 'Some error',
    };
    const newState = articleDetailsReducer(initialState as ArticleDetailsSchema, fetchArticleById.fulfilled(article, '1', ''));
    expect(newState.isLoading).toBeFalsy();
    expect(newState.error).not.toBeDefined();
    expect(newState.data).toEqual(article);
  });
});
