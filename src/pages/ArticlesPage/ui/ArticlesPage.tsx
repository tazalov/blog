import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';
import { cn } from '@/shared/lib/classNames/cn';

const ArticlesPage: FC = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.ArticlesPage, {}, [])}>
      {t('ArticlesPage')}
    </div>
  );
};

export default memo(ArticlesPage);
