import { getLoginIsLoading } from './getLoginIsLoading';
import { StateSchema } from '@/app/providers/store';

describe('getLoginIsLoading selector', () => {
  it('should return isLoading with correct value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };
    expect(getLoginIsLoading(state as StateSchema)).toBeTruthy();
  });
  it('should return falsy isLoading', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy();
  });
});
