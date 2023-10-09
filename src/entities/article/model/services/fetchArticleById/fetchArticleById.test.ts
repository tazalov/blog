import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { fetchArticleById } from './fetchArticleById';
import { article } from '../../const/tests/article';

describe('fetchArticleById async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    //* Создаем инстанс для тестирования
    const thunk = new TestAsyncThunk(fetchArticleById);

    //* Мокаем результат запроса
    thunk.api.get.mockReturnValue(Promise.resolve({ data: article }));

    //* Вызываем санку (если нужно, то передаем в callThunk данные, с которым должна вызваться санка)
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(article);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Request execution error');
  });
});
