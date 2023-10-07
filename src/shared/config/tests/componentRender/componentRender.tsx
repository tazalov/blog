import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import i18n from '@/shared/config/i18n/i18nForTest';
import { StoreProvider, StateSchema } from '@/app/providers/store';

interface WithRouterOptions {
  route?: string
  initialState? :DeepPartial<StateSchema>
}

export const componentRender = (component: ReactNode, options: WithRouterOptions = {}) => {
  const { route = '/', initialState } = options;
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState}>
        <I18nextProvider i18n={i18n}>
          {component}
        </I18nextProvider>
      </StoreProvider>
    </MemoryRouter>,
  );
};

/*
 * Это наш хок, супер нужный, чтобы в тестах, в которых есть хук useTranslation
 * тесты не ругались при рендере компонент.
 * Тут мы используем провайдер из библиотеки i18next, в который прокидываем
 * специальный конфиг, который взяли из доки i18next для тестов!

 * Теперь, в тестах компонентов, которые юзают useTranslation,
 * вместо render, мы юзаем вот эту фигню.

 ? Так же он поможет не упасть тестам для компонентов, внутри которых есть Link или NavLink
 */
