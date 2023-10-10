import { EntityState } from '@reduxjs/toolkit';
import { CommentT } from '@/entities/comment';

export interface ArticleDetailsCommentSchema extends EntityState<CommentT> {
  isLoading?: boolean
  error?: string
  /*
  * Обычно мы бы хранили данные вот так вот: data?: CommentT[],
  * как обычный массив с комментариями, но для нормализации данных и правильной работы селектора
  * мы должны хранить данные вот в таком виде:
  * ids: EntityId[]
  * entities: Dictionary<T>
  * Соответственно у нас массив id комментариев, а в entities хранятся сами комментарии, где ключ это тип
  ? EntityId,
  * а значение это тип
  ? Dictionary<EntityId>,
  * но эти типы уже прописаны в тулките и мы можем унаследоваться от уже готового интерфейса, он называется
  ? EntityState<Тип наших комментариев>
  */
}
