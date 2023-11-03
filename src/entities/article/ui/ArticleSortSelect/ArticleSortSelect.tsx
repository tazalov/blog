import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleSortSelect.module.scss';
import { Select, SelectOption } from '@/shared/ui/Select/Select';
import { ArticleSortField } from '@/entities/article';
import { SortOrder } from '@/shared/types';

interface ArticleSortSelectPT {
  className?: string;
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (order: SortOrder) => void
  onChangeSort: (sort: ArticleSortField) => void
}

export const ArticleSortSelect = memo(
  ({
    className, sort, order, onChangeSort, onChangeOrder,
  }: ArticleSortSelectPT) => {
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
      {
        value: 'asc',
        content: t('ascending'),
      }, {
        value: 'desc',
        content: t('descending'),
      },
    ], [t]);

    const sortByOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
      {
        value: ArticleSortField.CREATED,
        content: t('date creating'),
      }, {
        value: ArticleSortField.VIEWS,
        content: t('views'),
      }, {
        value: ArticleSortField.TITLE,
        content: t('name'),
      },
    ], [t]);

    return (
      <div className={cn(s.ArticleSortSelect, {}, [className])}>
        <Select<ArticleSortField>
          label={t('Sort by')}
          options={sortByOptions}
          value={sort}
          onChange={onChangeSort}
        />
        <Select<SortOrder>
          label={t('by')}
          options={orderOptions}
          value={order}
          onChange={onChangeOrder}
        />
      </div>
    );
  },
);
