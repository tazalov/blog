import { getLoginPassword } from './getLoginPassword';
import { StateSchema } from '@/app/providers/store';

describe('getLoginPassword selector', () => {
  it('should return correct password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: '123',
      },
    };
    expect(getLoginPassword(state as StateSchema)).toEqual('123');
  });
  it('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual('');
  });
});
