import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/Code/Code';

interface ArticleCodeBlockComponentPT {
  className?: string;
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(
  ({ className, block }:ArticleCodeBlockComponentPT) => {
    const { t } = useTranslation();
    return (
      <div className={cn(s.ArticleCodeBlockComponent, {}, [className])}>
        <Code code={block.code} />
      </div>
    );
  },
);
