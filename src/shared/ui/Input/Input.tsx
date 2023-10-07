import {
  InputHTMLAttributes,
  memo,
  ChangeEvent,
  useState,
  useEffect,
  useRef,
} from 'react';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Input.module.scss';

type HTMLInputPT = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputPT extends HTMLInputPT {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const Input = memo(({
  className = '',
  value,
  onChange,
  autoFocus,
  type = 'text',
  placeholder,
  ...restProps
}: InputPT) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.currentTarget.value);
    setCaretPosition(e.target.value.length);
  };
  const handleSelect = (e: any) => {
    setCaretPosition(e?.target?.selectionStart || 0);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={cn(s.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={s.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <div className={s.caretWrapper}>
        <input
          ref={ref}
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onSelect={handleSelect}
          onBlur={handleBlur}
          className={s.input}
          {...restProps}
        />
        {isFocused && <span className={s.caret} style={{ left: `${caretPosition * 10}px` }} />}
      </div>
    </div>
  );
});
