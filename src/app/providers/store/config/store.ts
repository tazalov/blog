import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/StateSchema';
import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { loginReducer } from '@/features/auth-by-username';

/*
 * Шлем нахер доку тулкита с ее ReturnType для получения типа стейта
 * Мы сами описываем тип стейта, и ts нам поможет, если мы что то забыли добавить в reducer
 * Тип стейта описываем в StateSchema.ts
 */

/*
 ? Так как configureStore - generic, то мы можем явно передать в него тип стейта
 ? Так же для тестов мы вводим необязательный параметр initialState, он нам понадобится,
 ? чтобы создавать стейт внутри тестов.
 */

const createReduxStore = (initialState?: StateSchema, isDev = false) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>(
    {
      reducer: rootReducer,
      devTools: isDev,
      preloadedState: initialState,
    },
  );
};

export { createReduxStore };
