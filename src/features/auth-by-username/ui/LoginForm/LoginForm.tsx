import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './LoginForm.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { Input } from '@/shared/ui/Input/Input';
import { loginActions, loginReducer } from '../../model/slice/login.slice';
import {
  loginByUsername,
} from '../../model/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import {
  getLoginIsLoading,
} from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import {
  getLoginPassword,
} from '../../model/selectors/getLoginPassword/getLoginPassword';
import {
  getLoginUsername,
} from '../../model/selectors/getLoginUsername/getLoginUsername';

//* Инициализируем редюсеры, которые нужны
const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

export interface LoginFormPT {
  className?: string;
}

const LoginForm = memo(({ className }: LoginFormPT) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginIsLoading);

  const handleOnChangeUsername = (username: string) => {
    dispatch(loginActions.setUsername(username));
  };

  const handleOnChangePassword = (password: string) => {
    dispatch(loginActions.setPassword(password));
  };

  const handleOnClickLogin = () => {
    dispatch(loginByUsername({
      username,
      password,
    }));
  };

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.LoginForm, {}, [className])}>
        <Text title={t('Authorization')} />
        <Input
          placeholder={t('enter username')}
          value={username}
          onChange={handleOnChangeUsername}
          autoFocus
        />
        <Input
          placeholder={t('enter password')}
          value={password}
          onChange={handleOnChangePassword}
        />
        <Button
          className={s.loginBtn}
          disabled={isLoading}
          onClick={handleOnClickLogin}
        >
          {t('Login')}
        </Button>
        {error && <Text theme={TextTheme.ERROR} text={t('Invalid username or password')} />}
      </div>
    </DynamicModuleLoader>
  );
});

export default LoginForm;
