import { EntityState } from '@reduxjs/toolkit';
import { ArticleT, ArticleViewMode } from '@/entities/article';

export interface ArticlesPageSchema extends EntityState<ArticleT> {
  isLoading?: boolean
  error?: string
  view: ArticleViewMode
}
