import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';

interface LoginFormPT {
  className?: string;
}

export const LoginForm: FC<LoginFormPT> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.LoginForm, {}, [className])}>
      <Input placeholder={t('enter username')} autoFocus />
      <Input placeholder={t('enter password')} />
      <Button className={s.loginBtn}>{t('Login')}</Button>
    </div>
  );
};
