import { StateSchema } from '@/app/providers/store';
import { getProfileReadonly } from './getProfileReadonly';

describe('getProfileReadonly.test', () => {
  it('state getting is correct', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadonly(state as StateSchema)).toBeTruthy();
  });

  it('state getting is correct (state empty)', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadonly(state as StateSchema)).not.toBeDefined();
  });
});
