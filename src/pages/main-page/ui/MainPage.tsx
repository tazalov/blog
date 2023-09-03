import {FC} from 'react';
import {useTranslation} from 'react-i18next';

type MainPagePT = {
  // add props type
};

const MainPage: FC<MainPagePT> = ({}) => {
  const { t} = useTranslation('main');
  return (
      <div>
        {t("Main page")}
      </div>
  );
};

export default MainPage