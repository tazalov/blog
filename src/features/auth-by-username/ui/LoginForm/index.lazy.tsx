import { lazy, FC } from 'react';
import { LoginFormPT } from './LoginForm';

export const LoginFormLazy = lazy<FC<LoginFormPT>>(() => import('./LoginForm'));
