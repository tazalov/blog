import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { CommentT } from '@/entities/comment';

export const fetchCommentsByArticleId = createAsyncThunk<CommentT[], string | undefined, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (!articleId) {
      return rejectWithValue('Id is empty!');
    }

    try {
      /*
      * Здесь мы указываем query параметры, _expand нужен для того, чтобы с бека для комментария, в котором хранится userId,
      * подтянулся еще и сам user, и эти данные мы используем для отображенияч комментария.
      * В user нам придет имя пользователя, его id и аватар (см. db.json)
      */

      const response = await extra.api.get<CommentT[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('Request execution error');
    }
  },
);
