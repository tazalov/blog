import { FC, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from '@/shared/ui/Select/Select';
import { Countries } from '../../model/types/country';
import { cn } from '@/shared/lib/classNames/cn';

const options = [
  { value: Countries.Russia, content: Countries.Russia },
  { value: Countries.Belarus, content: Countries.Belarus },
  { value: Countries.Ukraine, content: Countries.Ukraine },
  { value: Countries.Kazakhstan, content: Countries.Kazakhstan },
];

interface CountrySelectPT {
  className?: string
  value?: string
  onChange?: (value: Countries) => void
  readonly?:boolean
}

export const CountrySelect: FC<CountrySelectPT> = ({
  className, value, onChange, readonly,
}) => {
  const { t } = useTranslation('profile');

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Countries);
  }, [onChange]);

  return (
    <Select
      label={t('Country')}
      className={cn('', {}, [className])}
      readonly={readonly}
      options={options}
      value={value}
      onChange={handleChange}
    />
  );
};
