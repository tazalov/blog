import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ProfileCard.module.scss';
import { cn, Mods } from '@/shared/lib/classNames/cn';
import { Text, TextTheme, TextAlign } from '@/shared/ui/Text/Text';
import { Input } from '@/shared/ui/Input/Input';
import { ProfileT } from '../../model/types/profileSchema';
import { Loader } from '@/shared/ui/Loader/Loader';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { CurrencySelect, Currency } from '@/entities/currency';
import { Countries, CountrySelect } from '@/entities/country';

interface ProfileCardPT {
  className?: string;
  data?: ProfileT;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean
  changeFirstname?: (value?: string) => void
  changeLastname?: (value?: string) => void
  changeAge?:(value?: string) => void
  changeCity?:(value?: string) => void
  changeUsername?:(value?: string) => void
  changeAvatar?:(value?: string) => void
  changeCurrency?:(value?: Currency) => void
  changeCountry?:(value?: Countries) => void
}

export const ProfileCard: FC<ProfileCardPT> = ({
  className,
  data,
  isLoading,
  error,
  readonly,
  changeFirstname,
  changeLastname,
  changeAge,
  changeCity,
  changeUsername,
  changeAvatar,
  changeCurrency,
  changeCountry,
}) => {
  const { t } = useTranslation('profile');

  const mods: Mods = {
    [s.editing]: !readonly,
  };

  const setProfileClasses = (someClass?: string) => cn(s.ProfileCard, mods, [className, someClass]);

  if (isLoading) {
    return (
      <div data-testid="profile_card_loading" className={setProfileClasses(s.loading)}>
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div data-testid="profile_card_error" className={setProfileClasses(s.error)}>
        <Text
          theme={TextTheme.ERROR}
          title={`${t(
            'An error occurred while loading the profile',
          )}: ${error}`}
          text={t('Try to reload the page')}
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div data-testid="profile_card" className={setProfileClasses()}>
      <div className={s.data}>
        {data?.avatar && (
          <div className={s.avatarWrapper}>
            <Avatar src={data?.avatar} alt={t('Profile')} size={200} />
          </div>
        )}
        <Input
          value={data?.first}
          onChange={changeFirstname}
          placeholder={t('Your name')}
          readonly={readonly}
          className={s.input}
        />
        <Input
          value={data?.lastname}
          onChange={changeLastname}
          placeholder={t('Your lastname')}
          readonly={readonly}
          className={s.input}
        />
        <Input
          value={data?.age}
          onChange={changeAge}
          placeholder={t('Age')}
          readonly={readonly}
          className={s.input}
          type="number"
        />
        <Input
          value={data?.city}
          onChange={changeCity}
          placeholder={t('City')}
          readonly={readonly}
          className={s.input}
        />
        <CountrySelect
          value={data?.country}
          onChange={changeCountry}
          readonly={readonly}
          className={s.input}
        />
        <Input
          value={data?.username}
          onChange={changeUsername}
          placeholder={t('Username')}
          readonly={readonly}
          className={s.input}
        />
        <Input
          value={data?.avatar}
          onChange={changeAvatar}
          placeholder={t('Avatar link')}
          readonly={readonly}
          className={s.input}
        />
        <CurrencySelect
          value={data?.currency}
          onChange={changeCurrency}
          readonly={readonly}
          className={s.input}
        />
      </div>
    </div>
  );
};
