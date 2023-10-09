import React, { memo } from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Icon.module.scss';

interface IconPT {
  className?: string;
  Svg: React.FunctionComponent<React.SVGAttributes<SVGElement>>
}

export const Icon = memo(
  ({ className, Svg }:IconPT) => (
    <Svg className={cn(s.Icon, {}, [className])} />
  ),
);
