import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './NotFound.module.scss';

interface NotFoundPT {
  className?: string;
}

export const NotFound: FC<NotFoundPT> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.NotFound, {}, [className])}>
      {t('Page not found')}
    </div>
  );
};
