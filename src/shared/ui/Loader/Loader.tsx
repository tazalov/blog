import { FC } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Loader.module.scss';

interface LoaderPT {
  className?: string;
}

export const Loader: FC<LoaderPT> = ({ className }) => (
  <div className={cn(s.Loader, {}, [className])}>
  </div>
);
