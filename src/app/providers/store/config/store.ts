import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/StateSchema';
import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import {
  createReducerManager,
} from '@/app/providers/store/config/reducerManager';

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
  };

  //* Создали нашего красавчика и передали в него синхронные редюсеры
  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>(
    {
      reducer: reducerManager.reduce,
      devTools: isDev,
      preloadedState: initialState,
    },
  );

  // TODO пофиксить, тутова мы создали новое поле в store, далее тебе за примером в LoginForm.tsx
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export { createReduxStore };
