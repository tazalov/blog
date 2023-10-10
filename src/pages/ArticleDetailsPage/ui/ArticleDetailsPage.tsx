import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArticleDetails } from '@/entities/article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { CommentList } from '@/entities/comment';
import s from './ArticleDetailsPage.module.scss';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  articleDetailsCommentReducer,
  getArticleComments,
} from '../model/slice/articleDetailsComment.slice';
import {
  getCommentsIsLoading,
  getCommentsError,
} from '../model/selectors/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getCommentsIsLoading);
  const error = useSelector(getCommentsError);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return (
      <Text title={t('Something went wrong')} text={t('Article not found')} theme={TextTheme.ERROR} />
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div>
        <ArticleDetails id={id} className={s.ArticleDetailsPage} />
        <Text className={s.commentTitle} title={t('Comments')} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
