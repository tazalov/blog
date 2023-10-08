import { StateSchema } from '@/app/providers/store';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  it('state getting is correct', () => {
    const profileData = {
      username: 'myusername',
      first: 'Sam',
      lastname: 'Smith',
      age: 20,
      city: 'Moscow',
      currency: Currency.EUR,
      country: Countries.Russia,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: profileData,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(profileData);
  });

  it('state getting is correct (state empty)', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).not.toBeDefined();
  });
});
