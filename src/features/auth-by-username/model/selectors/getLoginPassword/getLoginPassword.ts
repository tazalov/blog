import { StateSchema } from '@/app/providers/store';

export const getLoginPassword = (state: StateSchema): string => state?.loginForm?.password || '';
