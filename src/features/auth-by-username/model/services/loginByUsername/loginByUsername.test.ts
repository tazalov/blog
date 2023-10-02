import { loginByUsername } from './loginByUsername';
import { userActions } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

describe('loginByUsername async thunk', () => {
/*  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  }); */

  /*  it('set of actions for a successful request is correct', async () => {
    const userData: User = { username: '123', id: '1' };

    mockedAPI.post.mockReturnValue(Promise.resolve({ data: userData }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAPI.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({ username: '123', id: '1' });
  });

  it('set of actions for a erroneous request is correct', async () => {
    mockedAPI.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAPI.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Invalid username or password');
  }); */

  it('set of actions for a successful request is correct', async () => {
    const userValue = { username: '123', id: '1' };

    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  it('set of actions for a erroneous request is correct', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk({ username: '123', password: '123' });

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(thunk.api.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('Invalid username or password');
  });
});
