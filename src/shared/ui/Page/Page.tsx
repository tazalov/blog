import {
  memo, ReactNode, useRef, MutableRefObject,
} from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Page.module.scss';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';

interface PagePT {
  className?: string;
  children: ReactNode
  handleScrollEnd?: () => void
}

export const Page = memo(
  ({ className, children, handleScrollEnd }: PagePT) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll({
      callback: handleScrollEnd,
      triggerRef,
      wrapperRef,
    });

    return (
      <section ref={wrapperRef} className={cn(s.Page, {}, [className])}>
        {children}
        <div ref={triggerRef} />
      </section>
    );
  },
);
