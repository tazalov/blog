import { StateSchema } from '@/app/providers/store';

export const getLoginUsername = (state: StateSchema): string => state?.loginForm?.username || '';
