import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4); // pending - fulfilled - и 2 штуки внутри санки
    expect(fetchArticlesList).toBeCalledWith({ page: 3 });
  });

  it('set of actions for a falsy hasMore is correct', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: false,
        hasMore: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2); // pending - fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  it('set of actions for a truthy isLoading is correct', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        page: 2,
        ids: [],
        entities: {},
        limit: 5,
        isLoading: true,
        hasMore: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2); // pending - fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
