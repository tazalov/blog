import { EntityState } from '@reduxjs/toolkit';
import {
  ArticleT,
  ArticleViewMode,
  ArticleSortField,
  ArticleType,
} from '@/entities/article';
import { SortOrder } from '@/shared/types';

export interface ArticlesPageSchema extends EntityState<ArticleT> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit: number
  hasMore: boolean //* флаг для запроса новых статей, если они еще есть в БД

  // filters
  view: ArticleViewMode
  order: SortOrder
  sort: ArticleSortField
  search: string
  type: ArticleType

  _inited: boolean //* флаг нужен, если вдруг мы отключили удаление редюсера при демонтировании, чтобы заного не было запроса за статьями
}
