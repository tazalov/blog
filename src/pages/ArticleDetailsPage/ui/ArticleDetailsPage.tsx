import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
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
import { getCommentsIsLoading } from '../model/selectors/comments';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchCommentsByArticleId,
} from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { AddCommentForm } from '@/features/add-comment-form';
import {
  addCommentForArticle,
} from '../model/services/addCommentForArticle/addCommentForArticle';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { Page } from '@/shared/ui/Page/Page';

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentReducer,
};

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const comments = useSelector(getArticleComments.selectAll);
  const commentsIsLoading = useSelector(getCommentsIsLoading);

  const handleBackToList = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSandComment = useCallback((commentText: string) => {
    dispatch(addCommentForArticle(commentText));
  }, [dispatch]);

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchCommentsByArticleId(id));
    }
  });

  if (!id) {
    return (
      <Page>
        <Text title={t('Something went wrong')} text={t('Article not found')} theme={TextTheme.ERROR} />
      </Page>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <Page>
        <Button theme={ButtonTheme.OUTLINE} onClick={handleBackToList}>{t('Back to list')}</Button>
        <ArticleDetails id={id} className={s.ArticleDetailsPage} />
        <Text className={s.commentTitle} title={t('Comments')} />
        <AddCommentForm sendComment={handleSandComment} />
        <CommentList isLoading={commentsIsLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
