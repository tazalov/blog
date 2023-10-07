import { LoginSchema } from '../types/LoginSchema';
import { loginReducer, loginActions } from './login.slice';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

describe('login.slice.test', () => {
  it('setUsername action', () => {
    const initialState: DeepPartial<LoginSchema> = {
      username: 'andrey',
    };
    const newState = loginReducer(initialState as LoginSchema, loginActions.setUsername('maria'));
    expect(newState.username).toBe('maria');
  });
  it('setPassword action', () => {
    const initialState: DeepPartial<LoginSchema> = {
      password: '123',
    };
    const newState = loginReducer(initialState as LoginSchema, loginActions.setPassword('asdfg'));
    expect(newState.password).toBe('asdfg');
  });
  it('set isLoading', () => {
    const initialState: DeepPartial<LoginSchema> = {};
    const newState = loginReducer(initialState as LoginSchema, loginByUsername.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.error).not.toBeDefined();
  });
});
