import { useMemo, CSSProperties, memo } from 'react';
import s from './Avatar.module.scss';
import { cn } from '@/shared/lib/classNames/cn';

interface AvatarPT {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar = memo(({
  className, src, size, alt,
}: AvatarPT) => {
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);
  return (
    <img src={src} className={cn(s.Avatar, {}, [className])} style={styles} alt={alt} />
  );
});
