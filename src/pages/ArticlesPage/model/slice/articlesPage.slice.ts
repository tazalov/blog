import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import {
  ArticleT,
  ArticleViewMode,
  ArticleSortField,
  ArticleType,
} from '@/entities/article';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import {
  fetchArticlesList,
} from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LS_KEY } from '@/shared/const/localStorage';
import { SortOrder } from '@/shared/types';

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
    limit: 9,

    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,

    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleViewMode>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LS_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const viewMode = localStorage.getItem(ARTICLE_VIEW_LS_KEY) as ArticleViewMode;
      state.view = viewMode;
      //* вычисляем размер порции в зависимости от режима просмотра статей
      state.limit = viewMode === ArticleViewMode.BIG ? 4 : 8;
      state._inited = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.error = undefined;
      state.isLoading = true;

      //* зачищаем во время отправки запроса с фильтрами
      if (action.meta.arg.replace) {
        articlesAdapter.removeAll(state);
      }
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = undefined;

      //* если пришел не пустой массив статей, значит еще можно что то подгрузить, если нет, то мы больше не вызываем санку
      state.hasMore = action.payload.length >= state.limit;

      //* если флаг replace активен, то мы будем не добавлять к текущему стейту новые данные, а сетать новые
      //* это нужно для всех наших фильтров, иначе добавляем данные к уже имеющимся
      if (action.meta.arg.replace) {
        articlesAdapter.setAll(state, action.payload);
      } else {
        articlesAdapter.addMany(state, action.payload);
      }
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { actions: articlesPageActions } = articlesPageSlice;
export const { reducer: articlesPageReducer } = articlesPageSlice;
