import {
  combineReducers,
  ReducersMapObject,
  AnyAction,
  Reducer,
} from '@reduxjs/toolkit';
import { StateSchema, KeyReducersT, ReducerManager } from './StateSchema';

/*
* Тэкс, это штучка (функция) создает нам объект с методами для добавления или удаления редюсеров.
* Мы этот менеджер будем юзать для асинхронной подгрузки редюсера -
* - так как мы асинхронно подгружаем компоненты, чтобы они не попали в стартовый бандл,
* то и стоило бы подгружать и логику для этих страниц асинхронно.
*/

/*
! Далее тебе нужно смотреть в store.ts
! Тип для нашего менеджера в StateSchema
*/

export function createReducerManager(initReducers: ReducersMapObject<StateSchema>): ReducerManager {
  /*
  ? Принимаем на вход редюсеры, формируем из них объект и создаем combinedReducer -
  ?  - он же рутовый, RootReducer, MainReducer, как тебе удобно.
  */
  const reducers = { ...initReducers };
  let combinedReducer = combineReducers(reducers);

  /*
  * Далее создаем массивчик, он пока пустой, в нем будут лежать ключи (названия редюсеров),
  * которые мы хотим удалять. Попадают они сюда из метода `remove`.
  */
  let keysToRemove: KeyReducersT[] = [];

  return {
    //* Тот же getState, только можем получить наш объект с редюсерами))
    getReducerMap: () => reducers,

    /*
    * Тутова чуть посложнее, но ничего такого. Это метод `reduce`, работает он так же
    * как и обычный редюсер, присмотрись ка.
    * Единственно отличие, если в нашем массивчике на удаление есть какой то редюсер,
    * то мы так же удаляем для него `state`, и возвращаем из метода наш новый рутовый
    * редюсер (он будет без удаленного редюсаера и будет принимать стейт без удаленной части стейта).
    */
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        // eslint-disable-next-line no-param-reassign
        state = { ...state };
        keysToRemove.forEach((key) => {
          // eslint-disable-next-line no-param-reassign
          delete state[key];
        });
        keysToRemove = [];
      }
      return combinedReducer(state, action);
    },

    /*
    * Ну тут ниче сложного, это метод для добавления редюсера по ключу.
    * Если ключ не передан или такой редюсер есть - ниче не делаем,
    * если редюсера такого еще нет, то мы обновляем наш объект reducers,
    * добавляя туда редюсер по ключу, и формируем новый рутовый редюсер.
    */
    add: (key: KeyReducersT, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    /*
    * Основная логика такая же как и в add, только мы удаляем из объекта,
    * обновляем наш массивчик с ключами для удаления и создаем новый рутовый редюсер.
    */
    remove: (key: KeyReducersT) => {
      if (!key || !reducers[key]) {
        return;
      }
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
