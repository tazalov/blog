import { FunctionComponent, SVGAttributes } from 'react';

export interface SidebarItemT {
  path: string;
  text: string;
  Icon: FunctionComponent<SVGAttributes<SVGElement>>;
  authOnly?: boolean;
}
