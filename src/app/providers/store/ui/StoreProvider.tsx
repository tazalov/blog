import { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { createReduxStore } from '@/app/providers/store/config/store';
import { StateSchema } from '@/app/providers/store';

interface StoreProviderPT {
  children?: ReactNode;
  initialState? : DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject>
}

export const StoreProvider: FC<StoreProviderPT> = ({ children, initialState, asyncReducers }) => {
  const navigate = useNavigate();

  const store = createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject,
      navigate,
      __IS_DEV__,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
