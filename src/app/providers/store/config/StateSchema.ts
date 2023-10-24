import { ToolkitStore } from '@reduxjs/toolkit/dist/configureStore';
import { ReducersMapObject, AnyAction, Reducer } from '@reduxjs/toolkit';
import { CombinedState } from 'redux';
import { AxiosInstance } from 'axios';
import { CounterSchema } from '@/entities/counter';
import { UserSchema } from '@/entities/user';
import { LoginSchema } from '@/features/auth-by-username';
import { ProfileSchema } from '@/entities/profile';
import { ArticleDetailsSchema } from '@/entities/article';
import { ArticleDetailsCommentSchema } from '@/pages/ArticleDetailsPage';
import { AddCommentFormSchema } from '@/features/add-comment-form';
import { ArticlesPageSchema } from '@/pages/ArticlesPage';
import { SaveScrollSchema } from '@/features/save-scroll';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  saveScroll: SaveScrollSchema

  // async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
  articleDetailsComments?: ArticleDetailsCommentSchema
  addCommentForm?: AddCommentFormSchema
  articlesPage?: ArticlesPageSchema
}

export type KeyReducersT = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: KeyReducersT, reducer: Reducer) => void
  remove: (key: KeyReducersT) => void
}

export interface ReduxStoreWithManager extends ToolkitStore<StateSchema>{
  reducerManager:ReducerManager
}

export interface ThunkExtraArgs {
  api: AxiosInstance
}

export interface ThunkConfig<T> {
  rejectValue: T
  extra: ThunkExtraArgs
  state: StateSchema
}
