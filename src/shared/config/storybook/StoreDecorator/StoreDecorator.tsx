import { StoryFn } from '@storybook/react';
import { StoreProvider, StateSchema } from '@/app/providers/store';
import {
  loginReducer,
} from '@/features/auth-by-username/model/slice/login.slice';
import { profileReducer } from '@/entities/profile';
import {
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsReducer,
} from '@/entities/article/model/slice/articleDetails.slice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
