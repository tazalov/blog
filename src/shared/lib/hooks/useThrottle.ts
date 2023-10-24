import { useRef, useCallback } from 'react';

/*
* Передаем колбек для вызова с троттлингом и задержку в мс.
* Создаем реф, значение которого будем менять:
* 1. изначально false, прыгаем в условие, выполняем колбек
* 2. меняем реф на true
* 3. через delay снова меняем наш реф на false, чтобы можно было вызвать еще раз колбек только тогда, когда задержка прошла
*/

export const useThrottle = (callback: (...args: any[]) => void, delay: number) => {
  const throttleRef = useRef(false);

  return useCallback((...args: any[]) => {
    if (!throttleRef.current) {
      callback(...args);
      throttleRef.current = true;

      setTimeout(() => {
        throttleRef.current = false;
      }, delay);
    }
  }, [callback, delay]);
};
