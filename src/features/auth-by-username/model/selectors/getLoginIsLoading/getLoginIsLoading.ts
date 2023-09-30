import { StateSchema } from '@/app/providers/store';

export const getLoginIsLoading = (state: StateSchema): boolean => state?.loginForm?.isLoading || false;
