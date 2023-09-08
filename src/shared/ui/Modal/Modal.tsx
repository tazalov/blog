import {
  FC, ReactNode, MouseEvent, useEffect, useCallback,
} from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalPT {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalPT> = ({
  className, children, isOpen, onClose,
}) => {
  const handleClickContent = (e: MouseEvent) => {
    e.stopPropagation();
  };

  const handleClickClose = useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClickClose();
    }
  }, [handleClickClose]);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, isOpen]);

  const mods = {
    [s.opened]: isOpen,
  };
  return (
    <Portal>
      <div className={cn(s.Modal, mods, [className])}>
        <div className={s.overlay} onClick={handleClickClose}>
          <div className={s.content} onClick={handleClickContent}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
