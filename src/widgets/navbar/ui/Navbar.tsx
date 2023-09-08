import { FC, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Navbar.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

interface NavbarPT {
  className?: string;
}

export const Navbar: FC<NavbarPT> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  const { t } = useTranslation();
  return (
    <div className={cn(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <Button theme={ButtonTheme.CLEAR_INDERTED} onClick={onToggleModal}>{t('Login')}</Button>
      </div>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t('Login')}</Modal>
    </div>
  );
};
