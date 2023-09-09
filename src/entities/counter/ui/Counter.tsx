import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/shared/ui/Button/Button';
import { counterActions } from '../model/slice/counter.slice';
import {
  getCounterValue,
} from '../model/selectors/getCounterValue/getCounterValue';

/*
* Для любой entities, все что мы импортируем из model указываем как относительный путь
*/

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{counterValue}</h1>
      <Button onClick={increment} data-testid="incr-btn">+</Button>
      <Button onClick={decrement} data-testid="decr-btn">-</Button>
    </div>
  );
};
