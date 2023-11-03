import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { ArticleT, ArticleType } from '@/entities/article';
import {
  getArticlesPageLimit,
  getArticlesPageSort,
  getArticlesPageSearch,
  getArticlesPageOrder,
  getArticlesPageType,
} from '../../selectors/articlesPage';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesListPT {
  page?: number
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<ArticleT[], FetchArticlesListPT, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async ({ page = 1, replace }, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const order = getArticlesPageOrder(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });
      const response = await extra.api.get<ArticleT[]>('/articles', {
        //* query params
        params: {
          _limit: limit,
          _page: page,
          _expand: 'user',
          _sort: sort,
          _order: order,
          type: type === ArticleType.ALL ? undefined : type,
          q: search,
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
