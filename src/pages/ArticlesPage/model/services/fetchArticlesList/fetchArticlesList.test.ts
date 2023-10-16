import { fetchArticlesList } from './fetchArticlesList';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { ArticleT } from '@/entities/article';

const articles: ArticleT[] = [];

describe('fetchArticlesList async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: { limit: 3 },
    });

    thunk.api.get.mockReturnValue(Promise.resolve({ data: articles }));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(articles);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesList, {
      articlesPage: { limit: 3 },
    });

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ page: 1 });

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Request execution error');
  });
});
