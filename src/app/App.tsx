import { FC, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppRouter } from '@/app/providers/router';
import { cn } from '@/shared/lib/classNames/cn';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import { userActions, getUserInit } from '@/entities/user';
import { Loader } from '@/shared/ui/Loader/Loader';

export const App: FC = () => {
  const dispatch = useDispatch();

  const _inited = useSelector(getUserInit);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={cn('app', {})}>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div className="content-page">
          <Sidebar />
          {_inited && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
};
