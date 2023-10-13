import { StateSchema } from '@/app/providers/store';
import { getCommentFormText, getCommentFormError } from './addCommentForm';

describe('addCommentForm.test', () => {
  it('get current text', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        text: 'asd',
      },
    };
    expect(getCommentFormText(state as StateSchema)).toBe('asd');
  });

  it('get current error', () => {
    const state: DeepPartial<StateSchema> = {
      addCommentForm: {
        error: 'Some error',
      },
    };
    expect(getCommentFormError(state as StateSchema)).toBe('Some error');
  });
});
