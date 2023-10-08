import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';
import { cn } from '@/shared/lib/classNames/cn';

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectPT {
  className?: string
  value?: string
  onChange?: (value: Currency) => void
  readonly?:boolean
}

export const CurrencySelect: FC<CurrencySelectPT> = ({
  className, value, onChange, readonly,
}) => {
  const { t } = useTranslation('profile');

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency);
  }, [onChange]);

  return (
    <Select
      label={t('Enter currency')}
      className={cn('', {}, [className])}
      readonly={readonly}
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};
