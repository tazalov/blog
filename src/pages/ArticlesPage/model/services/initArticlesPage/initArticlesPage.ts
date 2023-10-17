import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/store';
import { getArticlesPageInited } from '../../selectors/articlesPage';
import { articlesPageActions } from '../../slice/articlesPage.slice';
import {
  fetchArticlesList,
} from '../../services/fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const inited = getArticlesPageInited(getState());

    if (!inited) {
      //* порядок диспатчей важен, т.к. нам нужно сначала проинициализировать отображение (см. слайс, там мы ставим лимит и тип отображения)
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({
        page: 1,
      }));
    }
  },
);
