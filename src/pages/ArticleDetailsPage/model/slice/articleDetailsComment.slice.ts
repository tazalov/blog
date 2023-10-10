import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { CommentT } from '@/entities/comment';
import { StateSchema } from '@/app/providers/store';
import {
  ArticleDetailsCommentSchema,
} from '../types/ArticleDetailsCommentSchema';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

/*
* Не простая штука - нормализация, она нам нужна, чтобы у нас был доступ к конкретному комментарию
* по id - константная сложность, чтобы мы могли изменить конкретный комментарий по id - константная сложность.
*
* Этого мы достигаем тем, что храним в стейте комментарии не как массив объектов, а как объект, в котором
* id - ключ, а значение, это сам комментарий.
*
* Реализация такого подхода в редаксе - createEntityAdapter
*
* Он предоставляет кучу встроенных функций для CRUD операций (читай доку по createEntityAdapter)
*
* То, что возвращает createEntityAdapter - тут самый главный, с помощью него настраиваются и селекторы
* и обработка данных с асинхронной санки и т.п.
*/

const commentsAdapter = createEntityAdapter<CommentT>({
  //* Функция для получения id
  selectId: (comment) => comment.id,
});

//*
/*
* Селектор для получения комментариев, супер навороченный, в нем встроена уже куча методов, с помощью
* которых можно получить все комменты, получить по id конкретный, получить весь массив id и т.п.
* Более подробно можно посмотреть, использовав вот такую конструкцию:
? useSelector(getArticleComments.<Ctrl+Пробел>)
* */
export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsComments || commentsAdapter.getInitialState(),
);

const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsCommentSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: ['1', '2'],
    entities: {
      1: {
        id: '1',
        text: 'Some comment1',
        user: {
          id: '1',
          username: 'username1',
          avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
        },
      },
      2: {
        id: '2',
        text: 'Some comment2',
        user: {
          id: '2',
          username: 'username2',
          avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
        },
      },
    },
  }),
  reducers: { },
  extraReducers: (builder) => {
    builder.addCase(fetchCommentsByArticleId.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      commentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articleDetailsCommentActions } = articleDetailsCommentSlice;
export const { reducer: articleDetailsCommentReducer } = articleDetailsCommentSlice;
