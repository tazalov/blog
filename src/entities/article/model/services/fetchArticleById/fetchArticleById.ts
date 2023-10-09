import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleT } from '../../types/article';

export const fetchArticleById = createAsyncThunk<ArticleT, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<ArticleT>(`/articles/${articleId}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('Request execution error');
    }
  },
);
