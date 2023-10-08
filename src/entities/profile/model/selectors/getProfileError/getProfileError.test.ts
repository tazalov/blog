import { StateSchema } from '@/app/providers/store';
import { getProfileError } from './getProfileError';

describe('getProfileError.test', () => {
  it('state getting is correct', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Some error',
      },
    };
    expect(getProfileError(state as StateSchema)).toBe('Some error');
  });

  it('state getting is correct (state empty)', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileError(state as StateSchema)).not.toBeDefined();
  });
});
