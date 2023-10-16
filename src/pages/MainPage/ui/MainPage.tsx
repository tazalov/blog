import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/counter';
import { Page } from '@/shared/ui/Page/Page';

const MainPage = () => {
  const { t } = useTranslation('main');
  return (
    <Page>
      <Counter />
      {t('Main page')}
    </Page>
  );
};

export default memo(MainPage);
