import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { addCommentForArticle } from './addCommentForArticle';
import { CommentT } from '@/entities/comment';
import { article } from '@/entities/article';
import { StateSchema } from '@/app/providers/store';

const comment: CommentT = { id: '1', text: 'comment1', user: { id: '1', username: 'username1', avatar: 'asd' } };

const state: DeepPartial<StateSchema> = {
  user: {
    authData: {
      id: '1',
      avatar: 'asd',
      username: 'admin',
    },
  },
  articleDetails: {
    error: '',
    isLoading: false,
    data: article,
  },
};

describe('addCommentForArticle async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: comment }));

    const result = await thunk.callThunk('new comment');

    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comment);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, state);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('new comment');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });

  it('set of actions for empty state is correct', async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: {
        authData: undefined,
      },
      articleDetails: {
        data: undefined,
      },
    });

    const result = await thunk.callThunk('new comment');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('no data');
  });
});
