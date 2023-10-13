import { useCallback, useState, useMemo } from 'react';

interface UseHoverBind {
  onMouseEnter: () => void
  onMouseLeave: () => void
}

type UseHoverReturnT = [boolean, UseHoverBind]

export const useHover = (): UseHoverReturnT => {
  const [isHover, setIsHover] = useState(false);

  const onMouseEnter = useCallback(() => {
    setIsHover(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    setIsHover(false);
  }, []);

  return useMemo(() => [isHover, {
    onMouseEnter,
    onMouseLeave,
  }], [isHover, onMouseEnter, onMouseLeave]);
};

//* usage
/*
 const [isHover, bindHover] = useHover();
 console.log(isHover);

 <div {...bindHover}></div>
 */
