import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducersMapObject, AnyAction, Reducer } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { CounterSchema } from '@/entities/counter';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth-by-username';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
}

export type KeyReducersT = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: KeyReducersT, reducer: Reducer) => void
  remove: (key: KeyReducersT) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema>{
  reducerManager?:ReducerManager
}
