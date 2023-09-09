import { counterActions, counterReducer } from './counter.slice';
import { CounterSchema } from '@/entities/counter';

describe('counter.slice.test', () => {
  it('increment action', () => {
    const initialState: CounterSchema = {
      value: 10,
    };
    const newState = counterReducer(initialState, counterActions.increment);
    expect(newState).toEqual({ value: 11 });
    expect(counterReducer(newState, counterActions.increment)).toEqual({ value: 12 });
  });
  it('decrement action', () => {
    const initialState: CounterSchema = {
      value: 10,
    };
    const newState = counterReducer(initialState, counterActions.decrement);
    expect(newState).toEqual({ value: 9 });
    expect(counterReducer(newState, counterActions.decrement)).toEqual({ value: 8 });
  });
  /*
  * Такое поведение оправдано тем, что мы в counter.slice задали initialState со значением value = 0
  * И когда мы в качестве нового стейта передаем "ничего", то он берет за основу initialState
  */
  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment)).toEqual({ value: 1 });
    expect(counterReducer(undefined, counterActions.decrement)).toEqual({ value: -1 });
  });
});
