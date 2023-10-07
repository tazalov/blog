import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  profileReducer,
  fetchProfileData,
  ProfileCard,
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!process.env.STORYBOOK) {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
