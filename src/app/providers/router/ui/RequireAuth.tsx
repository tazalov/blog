import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { getUserAuthData } from '@/entities/user';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

//* Защищаем роуты, пример из доки

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
  }

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
