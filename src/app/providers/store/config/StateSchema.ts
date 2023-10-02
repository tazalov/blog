import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducersMapObject, AnyAction, Reducer } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';
import { CounterSchema } from '@/entities/counter';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth-by-username';
import { ProfileSchema } from '@/entities/profile';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
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

interface ThunkExtraArgs {
  api: AxiosInstance
  navigate: NavigateFunction
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
}
