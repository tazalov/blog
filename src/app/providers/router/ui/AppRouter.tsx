import {routeConfig} from '@/shared/config/routeConfig/routeConfig';
import {FC, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';

export const AppRouter: FC = () => {
  return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routeConfig).
              map(({
                element,
                path,
              }) => <Route key={path} path={path} element={<div className='page-wrapper'>{element}</div>}/>)}
        </Routes>
      </Suspense>
  );
};