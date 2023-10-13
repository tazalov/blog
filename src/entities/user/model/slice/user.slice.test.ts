import { UserSchema } from '../types/UserSchema';
import { userReducer, userActions } from './user.slice';

const authData = {
  id: '1',
  username: 'admin',
  avatar: 'str',
};

describe('user.slice.test', () => {
  it('set auth data', () => {
    const initialState: DeepPartial<UserSchema> = { _inited: false };
    const newState = userReducer(initialState as UserSchema, userActions.setAuthData(authData));
    expect(newState.authData).toEqual(authData);
  });

  it('init auth data', () => {
    const initialState: DeepPartial<UserSchema> = { _inited: false };
    const newState = userReducer(initialState as UserSchema, userActions.initAuthData());
    expect(newState._inited).toEqual(true);
  });

  it('logout', () => {
    const initialState: DeepPartial<UserSchema> = { authData };
    const newState = userReducer(initialState as UserSchema, userActions.logout());
    expect(newState.authData).not.toBeDefined();
  });
});
