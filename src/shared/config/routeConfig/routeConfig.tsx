import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/about-page';
import { MainPage } from '@/pages/main-page';
import { NotFound } from '@/pages/not-found-page';

/*
? Порядок действий:
? сначала добавляешь в enum название странички: 'profile', 'dialogs' ...
? далее добавляешь в RoutePath по ключу из enum - URL, который ты хочешь видеть
? далее в routeConfig добавляешь по аналогии с RoutePath,
? но дополнительно указываешь свой JSX Element
*/

/*
 * Смотри, тут мы задаем в enum ключи для наших роутов объекта RoutePath
 ! NOT_FOUND должен быть всегда последним!
 */
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  NOT_FOUND = 'not_found'
}

/*
 * Сам объект RoutePath в качестве значений будет содержать строку,
 * которая указывает непосредственно какой URL показать в браузере,
 * для отображения текущей страницы
 */
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.NOT_FOUND]: '*',
};

/*
* Здесь у нас типо свой createBrowserRouter,
* мы создали объект с типом из либы react-router-dom и
* описали его структуру
! по сути это объединение предыдущих сущностей в одну, с указанием того, какой элемент отобразить
*/
export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFound />,
  },
};

// ? Как все сделаешь, иди в app/providers/router/ui/AppRouter.jsx и там добавляй страничку
