import { StateSchema } from '@/app/providers/store';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  it('state getting is correct', () => {
    const formData = {
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
        form: formData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  });

  it('state getting is correct (state empty)', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).not.toBeDefined();
  });
});
