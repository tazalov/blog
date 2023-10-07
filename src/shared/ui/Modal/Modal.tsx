import {
  FC,
  ReactNode,
  MouseEvent,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { cn, Mods } from '@/shared/lib/classNames/cn';
import s from './Modal.module.scss';
import { Portal } from '@/shared/ui/Portal/Portal';

interface ModalPT {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal: FC<ModalPT> = ({
  className, children, isOpen, onClose, lazy,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) setIsMounted(true);
  }, [isOpen]);

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

  const mods: Mods = {
    [s.opened]: isOpen,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document.getElementById('storybook-root') || undefined}>
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
