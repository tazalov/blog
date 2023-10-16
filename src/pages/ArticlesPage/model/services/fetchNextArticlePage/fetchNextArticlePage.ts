import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import {
  getArticlesPageHasMore,
  getArticlesPageNum,
  getArticlesPageIsLoading,
} from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slice/articlesPage.slice';
import {
  fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articleDetails/fetchNextArticlePage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    //* isLoading засунули, чтобы запрос не отправлялся, если уже идет запрос:)
    if (hasMore && !isLoading) {
      dispatch(articlesPageActions.setPage(page + 1));
      dispatch(fetchArticlesList({
        page: page + 1,
      }));
    }
  },
);
