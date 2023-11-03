import {
  memo, ReactNode, useRef, MutableRefObject, UIEvent,
} from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Page.module.scss';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { saveScrollActions, getScrollByPath } from '@/features/save-scroll';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { StateSchema } from '@/app/providers/store';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';

interface PagePT {
  className?: string;
  children: ReactNode
  handleScrollEnd?: () => void
}

// TODO перенести логику фичи save scroll в Page, Page перенести в widgets
export const Page = memo(
  ({ className, children, handleScrollEnd }: PagePT) => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    const { pathname } = useLocation();

    const currentScrollPos = useSelector((state: StateSchema) => getScrollByPath(state, pathname));

    const dispatch = useAppDispatch();

    useInfinityScroll({
      callback: handleScrollEnd,
      triggerRef,
      wrapperRef,
    });

    useInitialEffect(() => {
      wrapperRef.current.scrollTop = currentScrollPos;
    });

    const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
      dispatch(saveScrollActions.setScrollPos({
        path: pathname,
        position: e.currentTarget.scrollTop,
      }));
    }, 500);

    return (
      <section ref={wrapperRef} className={cn(s.Page, {}, [className])} onScroll={handleScroll}>
        {children}
        {handleScrollEnd && <div className={s.trigger} ref={triggerRef} />}
      </section>
    );
  },
);
