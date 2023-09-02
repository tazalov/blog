import {AppRouter} from '@/app/providers/router';
import {useTheme} from '@/app/providers/theme';
import {cn} from '@/shared/lib/classNames/cn';
import {FC} from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';

export const App: FC = ({}) => {
  
  const {theme, toggleTheme} = useTheme()
  
  return (
      <div className={cn('app', {}, [theme])}>
        <button onClick={toggleTheme}>theme</button>
        <Link to={'/about'}>about</Link>
        <Link to={'/'}>main</Link>
        <AppRouter/>
      </div>
  );
};