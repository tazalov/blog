import { memo, CSSProperties } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Skeleton.module.scss';

interface SkeletonPT {
  className?: string;
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton = memo(
  ({
    className, height, border, width,
  }:SkeletonPT) => {
    const { t } = useTranslation();

    const styles: CSSProperties = {
      width,
      height,
      borderRadius: border,
    };

    return (
      <div className={cn(s.Skeleton, {}, [className])} style={styles}>
      </div>
    );
  },
);
