import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleT } from '@/entities/article';

export const fetchArticlesList = createAsyncThunk<ArticleT[], void, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<ArticleT[]>('/articles', { params: { _expand: 'user' } });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('Request execution error');
    }
  },
);
