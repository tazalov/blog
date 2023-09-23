import { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { cn } from '@/shared/lib/classNames/cn';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { userActions } from '@/entities/user';

export const App: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', {})}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
