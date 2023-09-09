import { FC, Suspense } from 'react';
import { AppRouter } from '@/app/providers/router';
import { cn } from '@/shared/lib/classNames/cn';
import { Navbar } from '@/widgets/navbar';
import { Sidebar } from '@/widgets/sidebar';

export const App: FC = () => (
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
