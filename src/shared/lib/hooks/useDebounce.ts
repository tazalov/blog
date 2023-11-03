import { useRef, useCallback, MutableRefObject } from 'react';

//* стандартный дебаунс, вызываем функцию с задержкой, для предотвращения множественных перерисовок (запросов)

export const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timer = useRef() as MutableRefObject<any>;

  return useCallback((...args: any[]) => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }, [callback, delay]);
};
