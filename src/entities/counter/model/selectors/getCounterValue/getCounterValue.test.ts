import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/store';
import {
  getCounterValue,
} from '@/entities/counter/model/selectors/getCounterValue/getCounterValue';

describe('getCounterValue.test', () => {
  it('state value getting is correct', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 10 },
    };
    expect(getCounterValue(state as StateSchema)).toBe(10);
  });
});
