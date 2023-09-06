import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/shared/config/i18n/i18nForTest';

export const renderWithTranslation = (component: ReactNode) => render(
  <I18nextProvider i18n={i18n}>
    {component}
  </I18nextProvider>,
);

/*
* Это наш хок, супер нужный, чтобы в тестах, в которых есть хук useTranslation
* тесты не ругались при рендере компонент.
* Тут мы используем провайдер из библиотеки i18next, в который прокидываем
* специальный конфиг, который взяли из доки i18next для тестов!

* Теперь, в тестах компонентов, которые юзают useTranslation,
* вместо render, мы юзаем вот эту фигню.
*/
