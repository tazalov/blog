import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import s from './ProfilePageHeader.module.scss';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { cn } from '@/shared/lib/classNames/cn';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
  getProfileData,
} from '@/entities/profile';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUserAuthData } from '@/entities/user';

interface ProfilePageHeaderPT {
  className?: string;
}

export const ProfilePageHeader: FC<ProfilePageHeaderPT> = ({ className }) => {
  const { t } = useTranslation('profile');

  const readonly = useSelector(getProfileReadonly);

  //* если не впадлу, то можно с помощью реселекта все сделать и вернуть нужное значение
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);

  const canEdit = authData?.id === profileData?.id;

  const dispatch = useAppDispatch();

  const activateEditMode = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const deactivateEditMode = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const handleSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <div data-testid="profile-page-header" className={cn(s.ProfilePageHeader, {}, [className])}>
      <Text title={t('Profile')} />
      {canEdit && (
        <div className={s.btnWrapper}>
          {readonly ? (
            <Button theme={ButtonTheme.OUTLINE} className={s.editBtn} onClick={activateEditMode}>
              {t('Edit')}
            </Button>
          ) : (
            <>
              <Button theme={ButtonTheme.OUTLINE_ACTION} className={s.editBtn} onClick={deactivateEditMode}>
                {t('Cancel')}
              </Button>
              <Button theme={ButtonTheme.OUTLINE} className={s.saveBtn} onClick={handleSave}>
                {t('Save')}
              </Button>
            </>
          )}
        </div>
      )}

    </div>
  );
};
