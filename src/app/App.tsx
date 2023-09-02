import {AppRouter} from '@/app/providers/router';
import {useTheme} from '@/app/providers/theme';
import {cn} from '@/shared/lib/classNames/cn';
import {Navbar} from '@/widgets/navbar';
import {FC} from 'react';
import './styles/index.scss';

export const App: FC = ({}) => {
  
  const {theme, toggleTheme} = useTheme()
  
  return (
      <div className={cn('app', {}, [theme])}>
        <button onClick={toggleTheme}>theme</button>
        <Navbar/>
        <AppRouter/>
      </div>
  );
};