import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage: FC = ({}) => {
  const { t } = useTranslation('article');
  return (
    <div>
      {t('ArticleDetailsPage')}
    </div>
  );
};

export default memo(ArticleDetailsPage);
