import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleT } from '@/entities/article';
import {
  getArticlesPageLimit,
} from '@/pages/ArticlesPage/model/selectors/articlesPage';

interface FetchArticlesListPT {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<ArticleT[], FetchArticlesListPT, ThunkConfig<string>>(
  'articleDetails/fetchCommentsByArticleId',
  async ({ page = 1 }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<ArticleT[]>('/articles', {
        //* query params
        params: {
          _limit: limit,
          _page: page,
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
