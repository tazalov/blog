import { StateSchema } from '@/app/providers/store';

export const getUsernameState = (state: StateSchema): string => state?.loginForm?.username || '';
