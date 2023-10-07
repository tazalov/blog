import { memo, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
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
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ProfilePageHeader } from '../ui/ProfilePageHeader/ProfilePageHeader';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  const formData = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);
  const readonly = useSelector(getProfileReadonly);

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <ProfilePageHeader />
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
        />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
