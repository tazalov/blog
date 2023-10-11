import {
  ProfileSchema,
  ValidateProfileData,
  ProfileT,
} from '../types/profileSchema';
import { profileReducer, profileActions } from './profile.slice';
import avatar from '@/shared/assets/tests/user.jpg';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '@/entities/profile';

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

describe('profile.slice.test', () => {
  it('setReadonly action', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      readonly: true,
    };
    const newState = profileReducer(initialState as ProfileSchema, profileActions.setReadonly(false));
    expect(newState.readonly).toBeFalsy();
  });
  it('cancelEdit action', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [ValidateProfileData.INCORRECT_USER_DATA],
      data: profile,
      form: {},
    };
    const newState = profileReducer(initialState as ProfileSchema, profileActions.cancelEdit());
    expect(newState.readonly).toBeTruthy();
    expect(newState.validateErrors).not.toBeDefined();
    expect(newState.form).toEqual(initialState.data);
  });
  it('updateProfile action', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [ValidateProfileData.INCORRECT_USER_DATA],
      data: profile,
      form: {},
    };
    const formData = {
      username: 'Bla',
      first: 'Asd',
      lastname: 'Asd',
      currency: Currency.RUB,
      country: Countries.Ukraine,
    };
    const newState = profileReducer(initialState as ProfileSchema, profileActions.updateProfile(formData));
    expect(newState.form).toEqual({ ...initialState.data, ...formData });
  });
  it('set isLoading, clear errors (fetchProfileData)', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      isLoading: false,
      error: 'Some error',
    };
    const newState = profileReducer(initialState as ProfileSchema, fetchProfileData.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.error).not.toBeDefined();
  });
  it('fetch profile service fulfilled', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      isLoading: true,
      error: 'Some error',
    };
    const newState = profileReducer(initialState as ProfileSchema, fetchProfileData.fulfilled(profile, '1', ''));
    expect(newState.isLoading).toBeFalsy();
    expect(newState.error).not.toBeDefined();
    expect(newState.data).toEqual(profile);
    expect(newState.form).toEqual(profile);
  });
  it('set isLoading, clear errors (updateProfileData)', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileData.SERVER_ERROR],
    };
    const newState = profileReducer(initialState as ProfileSchema, updateProfileData.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.validateErrors).not.toBeDefined();
  });
  it('update profile service fulfilled', () => {
    const initialState: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateErrors: [ValidateProfileData.SERVER_ERROR],
    };
    const newState = profileReducer(initialState as ProfileSchema, updateProfileData.fulfilled(profile, ''));
    expect(newState.isLoading).toBeFalsy();
    expect(newState.readonly).toBeTruthy();
    expect(newState.validateErrors).not.toBeDefined();
    expect(newState.data).toEqual(profile);
    expect(newState.form).toEqual(profile);
  });
});
