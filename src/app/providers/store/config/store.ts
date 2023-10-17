import { configureStore, ReducersMapObject, Reducer } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { StateSchema, ThunkExtraArgs } from '../config/StateSchema';
import { counterReducer } from '@/entities/counter';
import { userReducer } from '@/entities/user';
import { createReducerManager } from '../config/reducerManager';
import { $api } from '@/shared/api/api';

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

const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject,
  isDev = false,
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  //* Создали нашего красавчика и передали в него синхронные редюсеры
  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArgs = {
    api: $api,
  };

  const store = configureStore(
    {
      reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
      devTools: isDev,
      preloadedState: initialState,
      middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }),
    },
  );

  // TODO пофиксить, тутова мы создали новое поле в store, далее тебе за примером в LoginForm.tsx
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export { createReduxStore };
