import { StoryFn } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider, StateSchema } from '@/app/providers/store';
import {
  loginReducer,
} from '@/features/auth-by-username/model/slice/login.slice';
import { profileReducer } from '@/entities/profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={defaultAsyncReducers}>
    <Story />
  </StoreProvider>
);
