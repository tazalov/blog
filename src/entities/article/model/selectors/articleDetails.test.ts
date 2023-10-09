import { StateSchema } from '@/app/providers/store';
import { article } from '../const/tests/article';
import {
  getArticleDetailsData,
  getArticleDetailsIsLoading,
  getArticleDetailsError,
} from './articleDetails';

const state: DeepPartial<StateSchema> = {
  articleDetails: {
    data: article,
    isLoading: true,
    error: 'some error',
  },
};

describe('articleDetails.test', () => {
  it('data getting is correct', () => {
    expect(getArticleDetailsData(state as StateSchema)).toEqual(article);
  });

  it('error getting is correct', () => {
    expect(getArticleDetailsIsLoading(state as StateSchema)).toBeTruthy();
  });

  it('isLoading getting is correct', () => {
    expect(getArticleDetailsError(state as StateSchema)).toBe('some error');
  });

  it('state should be undefined', () => {
    expect(getArticleDetailsError({} as StateSchema)).not.toBeDefined();
  });
});
