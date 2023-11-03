import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slice/articlesPage.slice';
import {
  fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';
import { ArticleSortField, ArticleType } from '@/entities/article';
import { SortOrder } from '@/shared/types';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      const orderUrl = searchParams.get('order') as SortOrder;
      const sortUrl = searchParams.get('sort') as ArticleSortField;
      const searchUrl = searchParams.get('search');
      const typeUrl = searchParams.get('type');

      if (orderUrl) dispatch(articlesPageActions.setOrder(orderUrl));
      if (sortUrl) dispatch(articlesPageActions.setSort(sortUrl));
      if (searchUrl) dispatch(articlesPageActions.setSearch(searchUrl));
      if (typeUrl) dispatch(articlesPageActions.setType(typeUrl as ArticleType));
      //* порядок диспатчей важен, т.к. нам нужно сначала проинициализировать отображение (см. слайс, там мы ставим лимит и тип отображения)
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({
        page: 1,
      }));
    }
  },
);
