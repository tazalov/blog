import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage async thunk', () => {
  it('set of actions with an uninitialized producer is correct', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4); // pending - fulfilled - и 2 штуки внутри санки
    expect(fetchArticlesList).toBeCalledWith({ page: 1 });
  });

  it('the set of actions with an initialized producer is correct', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        _inited: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2); // pending - fulfilled
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
