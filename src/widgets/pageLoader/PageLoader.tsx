import { FC } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import { Loader } from '@/shared/ui/Loader/Loader';
import s from './PageLoader.module.scss';

interface PageLoaderPT {
  className?: string;
}

export const PageLoader: FC<PageLoaderPT> = ({ className }) => (
  <div className={cn(s.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
