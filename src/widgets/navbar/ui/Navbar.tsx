import { FC, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/auth-by-username';

interface NavbarPT {
  className?: string;
}

export const Navbar: FC<NavbarPT> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const { t } = useTranslation();
  return (
    <div className={cn(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <Button theme={ButtonTheme.CLEAR_INDERTED} onClick={onShowModal}>{t('Login')}</Button>
      </div>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal}>{t('Login')}</LoginModal>
    </div>
  );
};
