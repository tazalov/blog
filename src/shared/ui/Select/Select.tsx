import { useMemo, ChangeEvent } from 'react';
import s from './Select.module.scss';
import { cn } from '@/shared/lib/classNames/cn';

export interface SelectOption<T extends string> {
  value: T
  content:string
}

interface SelectPT<T extends string> {
  className?:string
  label?: string
  options?: SelectOption<T>[]
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>({
  className, label, options, value, onChange, readonly,
}: SelectPT<T>) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value as T);
  };

  const optionsList = useMemo(() => options?.map((el) => (
    <option key={el.value} value={el.value} className={s.option}>{el.content}</option>
  )), [options]);

  return (
    <div className={cn(s.SelectWrap, { [s.readonly]: readonly }, [className])}>
      {label && <span className={s.label}>{`${label}>`}</span>}
      <select id="select" className={s.select} disabled={readonly} value={value} onChange={handleChange}>
        {optionsList}
      </select>
    </div>
  );
};
