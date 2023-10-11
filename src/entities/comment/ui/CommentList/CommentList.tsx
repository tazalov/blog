import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './CommentList.module.scss';
import { CommentT } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from '@/shared/ui/Text/Text';

interface CommentListPT {
  className?: string
  comments?: CommentT[]
  isLoading?: boolean
}

export const CommentList = memo(
  ({ className, comments, isLoading }: CommentListPT) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div className={cn(s.CommentList, {}, [className])}>
          <CommentCard className={s.comment} isLoading />
          <CommentCard className={s.comment} isLoading />
          <CommentCard className={s.comment} isLoading />
        </div>
      );
    }

    return (
      <div className={cn(s.CommentList, {}, [className])}>
        {comments?.length
          ? comments.map((el) => (
            <CommentCard key={el.id} className={s.comment} comment={el} isLoading={isLoading} />
          ))
          : <Text text={t('There are no comments')} />}
      </div>
    );
  },
);
