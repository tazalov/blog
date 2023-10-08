import { ProfileT } from '@/entities/profile';
import {
  ValidateProfileData,
} from '@/entities/profile/model/types/profileSchema';

export const validateProfile = (profile?: ProfileT) => {
  if (!profile) {
    return [ValidateProfileData.NO_DATA];
  }

  const {
    first, lastname, age, country,
  } = profile;

  const errors: ValidateProfileData[] = [];

  if (!first || !lastname) {
    errors.push(ValidateProfileData.INCORRECT_USER_DATA);
  }

  if (!age || !Number.isInteger(age)) {
    errors.push(ValidateProfileData.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileData.INCORRECT_COUNTRY);
  }

  return errors;
};
