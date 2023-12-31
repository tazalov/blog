import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface LangSwitcherPT {
  className?: string;
}

export const LangSwitcher = memo(({ className }: LangSwitcherPT) => {
  const {
    t,
    i18n,
  } = useTranslation();

  const toggleLanguage = async () => i18n.changeLanguage(
    i18n.language === 'en' ? 'ru' : 'en',
  );

  return (
    <Button
      theme={ButtonTheme.CLEAR}
      className={cn('', {}, [className])}
      onClick={toggleLanguage}
    >
      {t('Lang')}
    </Button>
  );
});
