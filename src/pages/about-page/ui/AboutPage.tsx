import {FC} from 'react';
import {useTranslation} from 'react-i18next';

type AboutPagePT = {
  // add props type
};

const AboutPage: FC<AboutPagePT> = ({}) => {
  const { t} = useTranslation('about');
  return (
      <div>
        {t('About page')}
      </div>
  );
};

export default AboutPage