import { render } from 'react-dom';
import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { App } from '@/app/App';
import { ErrorBoundary } from '@/app/providers/error-boundary';
import { ThemeProvider } from '@/app/providers/theme';
import '@/shared/config/i18n/i18n';
import '@/app/styles/index.scss';
import { StoreProvider } from './app/providers/store';

const Root: FC = () => (
  <StoreProvider>
    <BrowserRouter>
      <ThemeProvider>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </BrowserRouter>
  </StoreProvider>
);

render(<Root />, document.getElementById('root'));
