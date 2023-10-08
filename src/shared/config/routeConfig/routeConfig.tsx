import { RouteProps } from 'react-router-dom';
import { MainPage } from '@/pages/MainPage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';

type AppRoutesPT = RouteProps & {
  authOnly?: boolean
}

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
  PROFILE = 'profile',
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
  [AppRoutes.PROFILE]: 'profile',
  [AppRoutes.NOT_FOUND]: '*',
};

/*
* Здесь у нас типо свой createBrowserRouter,
* мы создали объект с типом из либы react-router-dom и
* описали его структуру
! по сути это объединение предыдущих сущностей в одну, с указанием того, какой элемент отобразить
*/
export const routeConfig: Record<AppRoutes, AppRoutesPT> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};

// ? Как все сделаешь, твой путь будет доступен, нужно будет только написать компонент NavLink или Link
//* В app/providers/router/ui/AppRouter.jsx все автоматом подтянется
