import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticlesPage: FC = ({}) => {
  const { t } = useTranslation();
  return (
    <div>
      {t('ArticlesPage')}
    </div>
  );
};

export default memo(ArticlesPage);
