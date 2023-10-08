import { validateProfile } from './validateProfile';
import { ValidateProfileData, ProfileT } from '@/entities/profile';
import { Countries } from '@/entities/country';
import avatar from '@/shared/assets/tests/user.jpg';
import { Currency } from '@/entities/currency';

const profile: ProfileT = {
  username: 'myusername',
  first: 'Sam',
  lastname: 'Smith',
  avatar,
  age: 20,
  city: 'Moscow',
  currency: Currency.EUR,
  country: Countries.Russia,
};

describe('validateProfileData should return a correct array of errors', () => {
  it('profile is correct', async () => {
    const result = validateProfile(profile);
    expect(result.length).toBe(0);
  });

  it('profile empty', async () => {
    const result = validateProfile();
    expect(result).toEqual([ValidateProfileData.NO_DATA]);
  });

  it('profile firstname empty', async () => {
    const result = validateProfile({ ...profile, first: '' });
    expect(result).toEqual([ValidateProfileData.INCORRECT_USER_DATA]);
  });

  it('incorrect age', async () => {
    const result = validateProfile({ ...profile, age: undefined });
    expect(result).toEqual([ValidateProfileData.INCORRECT_AGE]);
  });

  it('country empty', async () => {
    const result = validateProfile({ ...profile, country: undefined });
    expect(result).toEqual([ValidateProfileData.INCORRECT_COUNTRY]);
  });

  it('all data incorrect', async () => {
    const result = validateProfile({});
    expect(result).toEqual([ValidateProfileData.INCORRECT_USER_DATA, ValidateProfileData.INCORRECT_AGE, ValidateProfileData.INCORRECT_COUNTRY]);
  });
});
