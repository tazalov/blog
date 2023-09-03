import { FC, Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { useTheme } from '@/app/providers/theme';
import { cn } from '@/shared/lib/classNames/cn';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';
import './styles/index.scss';

export const App: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={cn('app', {}, [theme])}>
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
