import { memo, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { TabItem, Tabs } from '@/shared/ui/Tabs/Tabs';
import { ArticleType } from '@/entities/article';
import { cn } from '@/shared/lib/classNames/cn';

interface ArticleTypeTabsPT {
  className?: string;
  value: string
  handleTabChange: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo(
  ({ className, value, handleTabChange }: ArticleTypeTabsPT) => {
    const { t } = useTranslation();

    const typeTabs = useMemo<TabItem[]>(() => [
      { value: ArticleType.ALL, content: t('All') },
      { value: ArticleType.IT, content: t('IT') },
      { value: ArticleType.ECONOMICS, content: t('Economics') },
      { value: ArticleType.SCIENCE, content: t('Science') },
    ], [t]);

    const handleChangeType = useCallback((item: TabItem) => {
      handleTabChange(item.value as ArticleType);
    }, [handleTabChange]);

    return (
      <Tabs
        className={cn('', {}, [className])}
        tabs={typeTabs}
        value={value}
        handleTabClick={handleChangeType}
      />
    );
  },
);
