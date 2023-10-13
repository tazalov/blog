import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';
import { CommentT } from '@/entities/comment';

const comments: CommentT[] = [
  { id: '1', text: 'comment1', user: { id: '1', username: 'username1', avatar: 'asd' } },
  { id: '2', text: 'comment2', user: { id: '2', username: 'username2', avatar: 'asd' } },
];

describe('fetchCommentsByArticleId async thunk', () => {
  it('set of actions for a successful request is correct', async () => {
    //* Создаем инстанс для тестирования
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    //* Мокаем результат запроса
    thunk.api.get.mockReturnValue(Promise.resolve({ data: comments }));

    //* Вызываем санку (если нужно, то передаем в callThunk данные, с которым должна вызваться санка)
    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(comments);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Request execution error');
  });

  it('the set of actions for the missing parameter "id" is correct', async () => {
    const thunk = new TestAsyncThunk(fetchCommentsByArticleId);

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Id is empty!');
  });
});
