import {FC, useState} from 'react';
import s from './Test.module.scss';

type TestPT = {
  // add props type
};

export const Test: FC<TestPT> = ({}) => {
  const [count, setCount] = useState(0)
  return (
      <div>
        <div className={s.test}>
          {count}
        </div>
        <div>
          <button onClick={() => setCount(prev => prev + 1)}>+</button>
        </div>
      </div>
  );
};