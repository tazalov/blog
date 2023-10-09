import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';
import { Text, TextAlign } from '@/shared/ui/Text/Text';

interface ArticleImageBlockComponentPT {
  className?: string;
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(
  ({ className, block }: ArticleImageBlockComponentPT) => {
    const { t } = useTranslation();
    return (
      <div className={cn(s.ArticleImageBlockComponent, {}, [className])}>
        <img src={block.src} className={s.img} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} />}
      </div>
    );
  },
);
