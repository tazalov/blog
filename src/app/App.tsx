import {FC, Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {cn} from '../helpers/classNames';
import {AboutPageLazy} from '../pages/about-page/index.lazy';
import {MainPageLazy} from '../pages/main-page/index.lazy';
import '../styles/index.scss';
import {useTheme} from '../theme/useTheme';

export const App: FC = ({}) => {
  const {theme, toggleTheme} = useTheme()
  
  return (
      <div className={cn('app', {}, [theme])}>
        <button onClick={toggleTheme}>theme</button>
        <Link to={'/about'}>about</Link>
        <Link to={'/'}>main</Link>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/about'} element={<AboutPageLazy/>}/>
            <Route path={'/'} element={<MainPageLazy/>}/>
          </Routes>
        </Suspense>
      </div>
  );
};