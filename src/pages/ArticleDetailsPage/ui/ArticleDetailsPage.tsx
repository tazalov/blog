import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/article';
import { Text, TextTheme } from '@/shared/ui/Text/Text';

const ArticleDetailsPage = () => {
  const { t } = useTranslation('article-details');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <Text title={t('Something went wrong')} text={t('Article not found')} theme={TextTheme.ERROR} />
    );
  }

  return (
    <div>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
