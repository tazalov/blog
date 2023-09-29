import { FC, useEffect } from 'react';
import { useStore, useDispatch } from 'react-redux';
import { Reducer } from '@reduxjs/toolkit';
import { ReduxStoreWithManager } from '@/app/providers/store';
import { KeyReducersT } from '@/app/providers/store/config/StateSchema';

/*
* Ку, тут наш супер типо ХОК, для асинхронной подгрузки компонента совместно с асинхронной подгрузкой
* его редюсера
* Пример использования в LoginForm.tsx
*/

export type ReducersList = {
  [key in KeyReducersT]?: Reducer //* собираем редюсеры в объект
}

interface DynamicModuleLoaderPT {
  reducers: ReducersList; //* сами редюсеры
  removeAfterUnmount?: boolean; //* флаг для указания того, нужно ли удалять редюсер после размонтирования компонента (по умолч. true)
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderPT> = ({
  reducers, removeAfterUnmount = true, children,
}) => {
  //* Работа с асинхронной подгрузкой редюсера для компонента
  const store = useStore() as ReduxStoreWithManager;

  const dispatch = useDispatch();

  //* При первой отрисовке логин формы мы добавляем наш редюсер по ключу

  // ? Дополнительные диспатчи нужны, чтобы увидеть в девтулзах, что мы удалили и редюсер

  useEffect(() => {
    Object.entries(reducers).forEach(([reducerName, reducer]: [KeyReducersT, Reducer]) => {
      store.reducerManager.add(reducerName, reducer);
      dispatch({ type: `@INIT ${reducerName} reducer` });
    });

    //* ну и удаляем его при размонтировании компонента
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerName]: [KeyReducersT, Reducer]) => {
          store.reducerManager.remove(reducerName);
          dispatch({ type: `@DESTROY ${reducerName} reducer` });
        });
      }
    };
    // eslint-disable-next-line
  }, []);
  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
