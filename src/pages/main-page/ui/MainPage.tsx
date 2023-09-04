import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from '@/app/providers/error-boundary';

const MainPage: FC = () => {
  const { t } = useTranslation('main');
  return (
    <div>
      <BugButton />
      {t('Main page')}
    </div>
  );
};

export default MainPage;
