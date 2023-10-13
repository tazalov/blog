import { AddCommentFormSchema } from '../types/addCommentForm';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../slice/addCommentForm.slice';

describe('addCommentForm.slice.test', () => {
  it('setReadonly action', () => {
    const initialState: DeepPartial<AddCommentFormSchema> = {
      text: '',
    };
    const newState = addCommentFormReducer(initialState as AddCommentFormSchema, addCommentFormActions.setText('some text'));
    expect(newState.text).toBe('some text');
  });
});
