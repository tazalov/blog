import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from '@/entities/profile';

const initialReducers: ReducersList = { profile: profileReducer };

const ProfilePage = memo(() => {
  const { t } = useTranslation('about');
  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        {t('ProfilePage')}
      </div>
    </DynamicModuleLoader>
  );
});

export default ProfilePage;
