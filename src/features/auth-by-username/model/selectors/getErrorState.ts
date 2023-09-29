import { StateSchema } from '@/app/providers/store';

export const getErrorState = (state: StateSchema): string => state?.loginForm?.error || '';
