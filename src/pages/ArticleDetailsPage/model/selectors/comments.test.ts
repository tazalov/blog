import { StateSchema } from '@/app/providers/store';
import {
  getCommentsIsLoading,
  getCommentsError,
} from '@/pages/ArticleDetailsPage/model/selectors/comments';

const state: DeepPartial<StateSchema> = {
  articleDetailsComments: {
    isLoading: true,
    error: 'some error',
  },
};

describe('comments.test', () => {
  it('isLoading getting is correct', () => {
    expect(getCommentsIsLoading(state as StateSchema)).toBeTruthy();
  });

  it('error getting is correct', () => {
    expect(getCommentsError(state as StateSchema)).toBe('some error');
  });
});
