import { ArticleT } from '../types/article';

//* Не забываем импортировать схему в StateSchema

export interface ArticleDetailsSchema {
  isLoading: boolean
  error?: string
  data?: ArticleT
}
