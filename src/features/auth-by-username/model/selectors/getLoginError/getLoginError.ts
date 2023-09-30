import { StateSchema } from '@/app/providers/store';

export const getLoginError = (state: StateSchema): string => state?.loginForm?.error || '';
