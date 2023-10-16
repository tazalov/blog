import { MutableRefObject, useEffect } from 'react';

/*
* callback - фукнция, которая вызовется, когда мы пересекли элемент
* triggerRef - реф, который будет висеть на элементе, пересеча который вызовется callback
* wrapperRef - реф, который будет висеть на элементе, который имеет скролл (в этом проекте чаще всего это компонент Page)
*/

export interface UseInfinityScrollOptions {
  callback?: () => void
  triggerRef: MutableRefObject<HTMLElement>
  wrapperRef: MutableRefObject<HTMLElement>
}

export const useInfinityScroll = ({ callback, triggerRef, wrapperRef }:UseInfinityScrollOptions) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    //* запоминаем наши рефы, чтобы при переходе на другую страницу, нормально отписаться от observe()
    const wrapper = wrapperRef.current;
    const trigger = triggerRef.current;
    if (callback) {
      const options = {
        root: wrapper,
        rootMargin: '0px',
        threshold: 1.0,
      };

      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);

      observer.observe(trigger);
    }

    return () => {
      if (observer && trigger) {
        observer.unobserve(trigger);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
};
