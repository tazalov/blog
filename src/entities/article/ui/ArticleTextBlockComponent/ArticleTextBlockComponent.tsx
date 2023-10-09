import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';

interface ArticleTextBlockComponentPT {
  className?: string;
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo(({ className, block }:ArticleTextBlockComponentPT) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.ArticleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={s.title} />}
      {block.paragraphs.map((el) => <Text key={el} text={el} className={s.paragraph} />)}
    </div>
  );
});
