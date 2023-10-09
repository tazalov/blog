import { FC, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/page-loader';
import {
  routeConfig,
  AppRoutesPT,
} from '@/shared/config/routeConfig/routeConfig';
import { RequireAuth } from '@/app/providers/router/ui/RequireAuth';

export const AppRouter: FC = () => {
  const renderWithWrapper = useCallback((route: AppRoutesPT) => (
    <Route
      key={route.path}
      path={route.path}
      element={(
        <div className="page-wrapper">
          {route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
        </div>
      )}
    />
  ), []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};
