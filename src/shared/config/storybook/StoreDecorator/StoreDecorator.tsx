import { StoryFn } from '@storybook/react';
import { StoreProvider, StateSchema } from '@/app/providers/store';
import {
  loginReducer,
} from '@/features/auth-by-username/model/slice/login.slice';
import { profileReducer } from '@/entities/profile';
import {
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsReducer,
} from '@/entities/article/model/slice/articleDetails.slice';
import {
  addCommentFormReducer,
} from '@/features/add-comment-form/model/slice/addCommentForm.slice';
import {
  articleDetailsCommentReducer,
} from '@/pages/ArticleDetailsPage/model/slice/articleDetailsComment.slice';

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  articleDetailsComments: articleDetailsCommentReducer,
  addCommentForm: addCommentFormReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (Story: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <Story />
  </StoreProvider>
);
