import { screen } from '@testing-library/react';
import { SidebarItem } from './SidebarItem';
import MainIcon from '@/shared/assets/icons/main.svg';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('SidebarItem component', () => {
  test('render', () => {
    componentRender(<SidebarItem
      collapsed={false}
      item={{
        path: '',
        text: 'Main',
        Icon: MainIcon,
      }}
    />);
    expect(screen.getByTestId('sidebar-item')).toBeInTheDocument();
  });
});
