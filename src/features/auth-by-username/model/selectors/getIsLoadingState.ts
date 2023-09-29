import { StateSchema } from '@/app/providers/store';

export const getIsLoadingState = (state: StateSchema): boolean => state?.loginForm?.isLoading || false;
