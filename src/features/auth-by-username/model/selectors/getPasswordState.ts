import { StateSchema } from '@/app/providers/store';

export const getPasswordState = (state: StateSchema): string => state?.loginForm?.password || '';
