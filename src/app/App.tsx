import {FC} from 'react';
import {Test} from '../components/Test';
import '../styles/index.scss';

export const App: FC = ({}) => {
  return (
      <div className='app'>
        <Test/>
      </div>
  );
};