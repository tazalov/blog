import { StateSchema } from '@/app/providers/store';
import { getUserAuthData, getUserInit } from '@/entities/user';

const authData = {
  id: '1',
  username: 'admin',
  avatar: 'str',
};

const state: DeepPartial<StateSchema> = {
  user: {
    authData,
    _inited: true,
  },
};

describe('user.test', () => {
  it('user auth data getting is correct', () => {
    expect(getUserAuthData(state as StateSchema)).toEqual(authData);
  });

  it('error getting is correct', () => {
    expect(getUserInit(state as StateSchema)).toBeTruthy();
  });
});
