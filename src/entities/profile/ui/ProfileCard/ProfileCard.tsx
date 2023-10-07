import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import s from './ProfileCard.module.scss';
import {
  getProfileData,
} from '@/entities/profile/model/selectors/getProfileData/getProfileData';
import {
  getProfileError,
} from '@/entities/profile/model/selectors/getProfileError/getProfileError';
import {
  getProfileIsLoading,
} from '@/entities/profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { cn } from '@/shared/lib/classNames/cn';
import { Text } from '@/shared/ui/Text/Text';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface ProfileCardPT {
  className?:string
}

export const ProfileCard: FC<ProfileCardPT> = ({ className }) => {
  const { t } = useTranslation('profile');

  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading);

  return (
    <div data-testid="profile_card" className={cn(s.ProfileCard, {}, [className])}>
      <div className={s.header}>
        <Text title={t('Profile')} />
        <Button theme={ButtonTheme.OUTLINE} className={s.editBtn}>
          {t('Edit')}
        </Button>
      </div>
      <div className={s.data}>
        <Input value={data?.first} placeholder={t('Your name')} className={s.input} />
        <Input value={data?.lastname} placeholder={t('Your lastname')} className={s.input} />
      </div>
    </div>
  );
};
