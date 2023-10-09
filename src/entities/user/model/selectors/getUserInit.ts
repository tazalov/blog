import { StateSchema } from '@/app/providers/store';

export const getUserInit = (state: StateSchema) => state.user._inited;
