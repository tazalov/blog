import { StoryFn } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider, StateSchema } from '@/app/providers/store';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (Story: StoryFn) => (
  <StoreProvider initialState={state}>
    <Story />
  </StoreProvider>
);
