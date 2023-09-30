import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUsername } from './getLoginUsername';
import { StateSchema } from '@/app/providers/store';

describe('getLoginUsername selector', () => {
  it('should return correct login', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'admin',
      },
    };
    expect(getLoginUsername(state as StateSchema)).toEqual('admin');
  });
  it('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
