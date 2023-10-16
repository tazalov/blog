import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  profileReducer,
  fetchProfileData,
  ProfileCard,
  getProfileError,
  getProfileIsLoading,
  profileActions,
  getProfileReadonly,
  getProfileForm,
  getProfileValidateErrors,
  ValidateProfileData,
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country/model/types/country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/shared/ui/Page/Page';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = () => {
  const { t } = useTranslation('profile');

  const errorTranslations = {
    [ValidateProfileData.SERVER_ERROR]: t('Server error'),
    [ValidateProfileData.NO_DATA]: t('Data is not specified'),
    [ValidateProfileData.INCORRECT_USER_DATA]: t('First and last name requared'),
    [ValidateProfileData.INCORRECT_COUNTRY]: t('Incorrect country'),
    [ValidateProfileData.INCORRECT_AGE]: t('Incorrect age'),
  };

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const { id } = useParams<{ id: string }>();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const handleChangeFirstname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ first: value || '' }));
  }, [dispatch]);

  const handleChangeLastname = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ lastname: value || '' }));
  }, [dispatch]);

  const handleChangeAge = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
  }, [dispatch]);

  const handleChangeCity = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ city: value || '' }));
  }, [dispatch]);

  const handleChangeUsername = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ username: value || '' }));
  }, [dispatch]);

  const handleChangeAvatar = useCallback((value?: string) => {
    dispatch(profileActions.updateProfile({ avatar: value || '' }));
  }, [dispatch]);

  const handleChangeCurrency = useCallback((value?: Currency) => {
    dispatch(profileActions.updateProfile({ currency: value }));
  }, [dispatch]);

  const handleChangeCountry = useCallback((value?: Countries) => {
    dispatch(profileActions.updateProfile({ country: value }));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Page>
        <ProfilePageHeader />
        {validateErrors && validateErrors.map((el) => (
          <Text key={el} theme={TextTheme.ERROR} text={errorTranslations[el]} />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          readonly={readonly}
          changeFirstname={handleChangeFirstname}
          changeLastname={handleChangeLastname}
          changeAge={handleChangeAge}
          changeCity={handleChangeCity}
          changeUsername={handleChangeUsername}
          changeAvatar={handleChangeAvatar}
          changeCurrency={handleChangeCurrency}
          changeCountry={handleChangeCountry}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ProfilePage);
