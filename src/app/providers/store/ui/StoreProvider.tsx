import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { createReduxStore } from '@/app/providers/store/config/store';
import { StateSchema } from '@/app/providers/store';

interface StoreProviderPT {
  children?: ReactNode;
  initialState? : DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider: FC<StoreProviderPT> = ({ children, initialState, asyncReducers }) => {
  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject, __IS_DEV__);
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
