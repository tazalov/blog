import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store/config/StateSchema';
import { counterReducer } from '@/entities/counter';

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

export const createReduxStore = (initialState?: StateSchema) => configureStore<StateSchema>({
  reducer: {
    counter: counterReducer,
  },
  devTools: __IS_DEV__,
  preloadedState: initialState,
});
