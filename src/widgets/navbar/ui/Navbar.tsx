import { FC, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Navbar.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import { LoginModal } from '@/features/auth-by-username';
import { getUserAuthData, userActions } from '@/entities/user';

interface NavbarPT {
  className?: string;
}

export const Navbar: FC<NavbarPT> = ({ className }) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const dispatch = useDispatch();

  const userAuthData = useSelector(getUserAuthData);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const { t } = useTranslation();

  if (userAuthData) {
    return (
      <div className={cn(s.Navbar, {}, [className])}>
        <div className={s.links}>
          <Button theme={ButtonTheme.CLEAR_INDERTED} onClick={onLogout}>{t('Logout')}</Button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(s.Navbar, {}, [className])}>
      <div className={s.links}>
        <Button theme={ButtonTheme.CLEAR_INDERTED} onClick={onShowModal}>{t('Login')}</Button>
        {isAuthModal
            && (
              <LoginModal isOpen={isAuthModal} onClose={onCloseModal}>
                {t('Login')}
              </LoginModal>
            )}
      </div>
    </div>
  );
};
