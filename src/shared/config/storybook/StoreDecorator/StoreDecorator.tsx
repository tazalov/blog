import { StoryFn } from '@storybook/react';
import { Provider } from 'react-redux';
import { createReduxStore } from '@/app/providers/store';

export const StoreDecorator = (Story: StoryFn) => {
  const store = createReduxStore();
  return (
    <Provider store={store}>
      <Story />
    </Provider>
  );
};
