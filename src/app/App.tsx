import {useTheme} from '@/app/providers/theme';
import {AboutPage} from '@/pages/about-page';
import {MainPage} from '@/pages/main-page';
import {FC, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {cn} from 'src/shared/lib/classNames';
import './styles/index.scss';

export const App: FC = ({}) => {
  
  const {theme, toggleTheme} = useTheme()
  
  return (
      <div className={cn('app', {}, [theme])}>
        <button onClick={toggleTheme}>theme</button>
        <Link to={'/about'}>about</Link>
        <Link to={'/'}>main</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPage/>}/>
            <Route path={'/'} element={<MainPage/>}/>
          </Routes>
        </Suspense>
      </div>
  );
};