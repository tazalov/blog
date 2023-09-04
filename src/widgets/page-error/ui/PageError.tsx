import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import { Button } from '@/shared/ui/Button/Button';
import s from './PageError.module.scss';

interface PageErrorPT {
  className?: string;
}

export const PageError: FC<PageErrorPT> = ({ className }) => {
  const { t } = useTranslation();

  // eslint-disable-next-line no-restricted-globals
  const refreshPage = () => location.reload();

  return (
    <div className={cn(s.PageError, {}, [className])}>
      <p>{t('Unexpected error has occurred')}</p>
      <Button onClick={refreshPage}>
        {t('Refresh page')}
      </Button>
    </div>
  );
};
