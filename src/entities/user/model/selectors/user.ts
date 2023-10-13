import { StateSchema } from '@/app/providers/store';

export const getUserAuthData = (state: StateSchema) => state.user.authData;

export const getUserInit = (state: StateSchema) => state.user._inited;
