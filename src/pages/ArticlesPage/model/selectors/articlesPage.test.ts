import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import {
  ArticleViewMode,
  ArticleSortField,
  ArticleType,
} from '@/entities/article';
import {
  getArticlesPageIsLoading,
  getArticlesPageError,
  getArticlesViewMode,
  getArticlesPageLimit,
  getArticlesPageHasMore,
  getArticlesPageNum,
  getArticlesPageInited,
} from './articlesPage';

const state: DeepPartial<StateSchema> = {
  articlesPage: {
    page: 11,
    hasMore: true,
    error: undefined,
    isLoading: true,
    view: ArticleViewMode.BIG,
    limit: 10,
    ids: [],
    entities: {},
    order: 'asc',
    sort: ArticleSortField.VIEWS,
    search: '',
    type: ArticleType.ALL,
    _inited: false,
  },
};

const otherState: DeepPartial<StateSchema> = {};

describe('articlesPage selectors', () => {
  it('isLoading getting is correct', () => {
    expect(getArticlesPageIsLoading(state as StateSchema)).toBeTruthy();
    expect(getArticlesPageIsLoading(otherState as StateSchema)).toBeFalsy();
  });
  it('error getting is correct', () => {
    expect(getArticlesPageError(state as StateSchema)).not.toBeDefined();
  });
  it('view getting is correct', () => {
    expect(getArticlesViewMode(state as StateSchema)).toBe(ArticleViewMode.BIG);
    expect(getArticlesViewMode(otherState as StateSchema)).toBe(ArticleViewMode.SMALL);
  });
  it('limit getting is correct', () => {
    expect(getArticlesPageLimit(state as StateSchema)).toBe(10);
    expect(getArticlesPageLimit(otherState as StateSchema)).toBe(8);
  });
  it('hasMore getting is correct', () => {
    expect(getArticlesPageHasMore(state as StateSchema)).toBeTruthy();
  });
  it('page getting is correct', () => {
    expect(getArticlesPageNum(state as StateSchema)).toBe(11);
    expect(getArticlesPageNum(otherState as StateSchema)).toBe(1);
  });
  it('_inited getting is correct', () => {
    expect(getArticlesPageInited(state as StateSchema)).toBeFalsy();
    expect(getArticlesPageInited(otherState as StateSchema)).not.toBeDefined();
  });
});
