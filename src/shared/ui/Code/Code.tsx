import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/shared/lib/classNames/cn';
import s from './Code.module.scss';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import CopyIcon from '@/shared/assets/icons/copy-20-20.svg';

interface CodePT {
  className?: string
  code: string
}

export const Code = memo(
  ({ className, code }:CodePT) => {
    const { t } = useTranslation('article-details');

    const handleCopy = useCallback(() => {
      navigator.clipboard.writeText(code);
    }, [code]);

    return (
      <pre className={cn(s.Code, {}, [className])}>
        <Button className={s.copyBtn} theme={ButtonTheme.CLEAR} onClick={handleCopy}>
          <CopyIcon className={s.copyIcon} />
        </Button>
        <code>
          {code}
        </code>
      </pre>
    );
  },
);
