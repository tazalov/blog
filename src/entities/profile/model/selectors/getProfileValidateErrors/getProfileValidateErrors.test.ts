import { StateSchema } from '@/app/providers/store';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileData } from '../../types/profileSchema';

describe('getProfileReadonly.test', () => {
  it('state getting is correct', () => {
    const errors = [ValidateProfileData.INCORRECT_USER_DATA, ValidateProfileData.INCORRECT_AGE];
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(errors);
  });

  it('state getting is correct (state empty)', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileValidateErrors(state as StateSchema)).not.toBeDefined();
  });
});
