import { StateSchema } from '@/app/providers/store';

export const getCommentsIsLoading = (state: StateSchema) => state.articleDetailsComments?.isLoading;

export const getCommentsError = (state: StateSchema) => state.articleDetailsComments?.error;
