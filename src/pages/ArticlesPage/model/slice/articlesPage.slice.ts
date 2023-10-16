import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import { ArticleT, ArticleViewMode } from '@/entities/article';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import {
  fetchArticlesList,
} from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LS_KEY } from '@/shared/const/localStorage';

const articlesAdapter = createEntityAdapter<ArticleT>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
  name: 'articlesPage',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    isLoading: false,
    error: undefined,
    view: ArticleViewMode.SMALL,
    ids: [],
    entities: {},
    page: 1,
    hasMore: true,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewMode>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LS_KEY, action.payload);
    },
    // TODO TEST
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const viewMode = localStorage.getItem(ARTICLE_VIEW_LS_KEY) as ArticleViewMode;
      state.view = viewMode;
      //* вычисляем размер порции в зависимости от режима просмотра статей
      state.limit = viewMode === ArticleViewMode.BIG ? 4 : 8;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state) => {
      state.error = undefined;
      state.isLoading = true;
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;
      articlesAdapter.addMany(state, action.payload);
      //* если пришел не пустой массив статей, значит еще можно что то подгрузить, если нет, то мы больше не вызываем санку
      state.hasMore = action.payload.length > 0;
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
