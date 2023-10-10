import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './CommentCard.module.scss';
import { CommentT } from '@/entities/comment';
import { Text } from '@/shared/ui/Text/Text';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface CommentCardPT {
  className?: string
  comment?: CommentT
  isLoading?: boolean
}

export const CommentCard = memo(
  ({ className, comment, isLoading }:CommentCardPT) => {
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <div className={cn(s.CommentCard, {}, [className])}>
          <div className={s.header}>
            <Skeleton border="50%" width={50} height={50} />
            <Skeleton className={s.username} width={200} height={30} />
          </div>
          <Skeleton className={s.text} width="100%" height={50} />
        </div>
      );
    }

    return (
      <div className={cn(s.CommentCard, {}, [className])}>
        <div className={s.header}>
          {comment?.user.avatar ? <Avatar size={50} src={comment?.user.avatar} /> : null}
          <Text className={s.username} title={comment?.user.username} />
        </div>
        <Text className={s.text} text={comment?.text} />
      </div>
    );
  },
);
