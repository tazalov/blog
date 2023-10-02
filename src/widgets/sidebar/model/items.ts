import { FunctionComponent, SVGAttributes } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import MainIcon from '@/shared/assets/icons/main.svg';
import AboutIcon from '@/shared/assets/icons/about.svg';
import ProfileIcon from '@/shared/assets/icons/profile.svg';

export interface SidebarItemT {
  path: string;
  text: string;
  Icon?: FunctionComponent<SVGAttributes<SVGElement>>
}

export const SidebarItemsList: SidebarItemT[] = [
  { path: RoutePath.main, text: 'Main', Icon: MainIcon },
  { path: RoutePath.about, text: 'About', Icon: AboutIcon },
  { path: RoutePath.profile, text: 'Profile', Icon: ProfileIcon },
];
