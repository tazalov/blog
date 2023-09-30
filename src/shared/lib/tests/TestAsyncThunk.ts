import { AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';

/*
* Что такое? В Реакте классы? Да!
* Создаем класс для упрощения тестирования санок
*
* Дженериком принимает те же типы, что и createAsyncThunk
*/

type ActionCreatorType<Return, Arg, RejectValue>
    = (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectValue}>

export class TestAsyncThunk<Return, Arg, RejectValue> {
  dispatch: jest.MockedFn<any>;

  actionCreator: ActionCreatorType<Return, Arg, RejectValue>;

  getState: () => StateSchema;

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(argThunk: Arg) {
    const action = this.actionCreator(argThunk);
    const result = await action(this.dispatch, this.getState, undefined);

    return result;
  }
}
