import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';
import { StateSchema } from '@/app/providers/store';

describe('getLoginError selector', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'error',
      },
    };
    expect(getLoginError(state as StateSchema)).toEqual('error');
  });
  it('should return empty string', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginError(state as StateSchema)).toEqual('');
  });
});
