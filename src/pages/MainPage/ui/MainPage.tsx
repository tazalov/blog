import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Counter } from '@/entities/counter';

const MainPage = memo(() => {
  const { t } = useTranslation('main');
  return (
    <div>
      <Counter />
      {t('Main page')}
    </div>
  );
});

export default MainPage;
