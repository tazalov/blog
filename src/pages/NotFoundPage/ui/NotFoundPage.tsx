import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './NotFoundPage.module.scss';

interface NotFoundPagePT {
  className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPagePT) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.NotFoundPage, {}, [className])}>
      {t('Page not found')}
    </div>
  );
});
