import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { userActions, User } from '@/entities/user';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('loginByUsername async thunk', () => {
/*  let dispatch: Dispatch;
  let getState: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
  }); */

  /*  it('set of actions for a successful request is correct', async () => {
    const userData: User = { username: '123', id: '1' };

    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({ username: '123', id: '1' });
  });

  it('set of actions for a erroneous request is correct', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const action = loginByUsername({ username: 'admin', password: '123' });
    const result = await action(dispatch, getState, undefined);

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Invalid username or password');
  }); */

  it('set of actions for a successful request is correct', async () => {
    const userData: User = { username: '123', id: '1' };
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userData }));

    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userData));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual({ username: '123', id: '1' });
  });

  it('set of actions for a erroneous request is correct', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }));
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk({ username: 'admin', password: '123' });

    expect(mockedAxios.post).toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual('Invalid username or password');
  });
});
