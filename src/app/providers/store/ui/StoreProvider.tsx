import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { createReduxStore } from '@/app/providers/store/config/store';
import { StateSchema } from '@/app/providers/store';

interface StoreProviderPT {
  children?: ReactNode;
  initialState? : DeepPartial<StateSchema>
}

export const StoreProvider: FC<StoreProviderPT> = ({ children, initialState }) => {
  const store = createReduxStore(initialState as StateSchema, __IS_DEV__);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
