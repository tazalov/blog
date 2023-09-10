import { FC } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './LoginModal.module.scss';
import { Modal } from '@/shared/ui/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalPT {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: FC<LoginModalPT> = ({ className, isOpen, onClose }) => (
  <Modal className={cn(s.LoginModal, {}, [className])} isOpen={isOpen} onClose={onClose} lazy>
    <LoginForm />
  </Modal>
);
