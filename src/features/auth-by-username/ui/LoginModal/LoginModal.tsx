import { FC, Suspense } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './LoginModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { Loader } from '@/shared/ui/Loader/Loader';
import { LoginFormLazy } from '../LoginForm/index.lazy';

interface LoginModalPT {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalPT> = ({ className, isOpen, onClose }) => (
  <Modal className={cn(s.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <Suspense fallback={<Loader />}>
      <LoginFormLazy />
    </Suspense>
  </Modal>
);
