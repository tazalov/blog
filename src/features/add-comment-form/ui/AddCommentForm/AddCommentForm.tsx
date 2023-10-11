import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './AddCommentForm.module.scss';
import { Input } from '@/shared/ui/Input/Input';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import {
  addCommentFormReducer,
  addCommentFormActions,
} from '../../model/slice/addCommentForm.slice';
import { getCommentFormText } from '../../model/selectors/addCommentForm';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';

const initialReducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

interface AddCommentFormPT {
  className?: string;
  sendComment: (commentText: string) => void
}

const AddCommentForm = ({ className, sendComment }: AddCommentFormPT) => {
  const { t } = useTranslation('article-details');

  const dispatch = useAppDispatch();

  const currentText = useSelector(getCommentFormText);

  const handleChange = useCallback((text: string) => {
    dispatch(addCommentFormActions.setText(text));
  }, [dispatch]);

  const handleSend = useCallback(() => {
    dispatch(addCommentFormActions.setText(''));
    sendComment(currentText || '');
  }, [dispatch, currentText, sendComment]);

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.AddCommentForm, {}, [className])}>
        <Input
          className={s.input}
          value={currentText}
          onChange={handleChange}
          placeholder={t('Enter your comment')}
        />
        <Button onClick={handleSend} theme={ButtonTheme.OUTLINE}>{t('Send')}</Button>
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(AddCommentForm);
