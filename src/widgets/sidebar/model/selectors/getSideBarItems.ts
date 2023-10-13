import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/user';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { SidebarItemT } from '../types/sidebar';

export const getSideBarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemT[] = [
      { path: RoutePath.main, text: 'Main', Icon: MainIcon },
      { path: RoutePath.about, text: 'About', Icon: AboutIcon },
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.profile}/${userData.id}`, text: 'Profile', Icon: ProfileIcon, authOnly: true,
        },
        {
          path: RoutePath.articles, text: 'Articles', Icon: ArticlesIcon, authOnly: true,
        },
      );
    }

    return sidebarItemsList;
  },
);
