import { useMemo, ChangeEvent, memo } from 'react';
import s from './Select.module.scss';
import { cn } from '@/shared/lib/classNames/cn';

interface SelectOption {
  value: string
  content:string
}

interface SelectPT {
  className?:string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(({
  className, label, options, value, onChange, readonly,
}: SelectPT) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.currentTarget.value);
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
});
