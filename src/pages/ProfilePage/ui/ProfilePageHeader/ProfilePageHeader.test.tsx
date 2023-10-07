import { screen } from '@testing-library/react';
import { ProfilePageHeader } from './ProfilePageHeader';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('ProfilePageHeader component', () => {
  it('render without error', () => {
    componentRender(<ProfilePageHeader />);
    expect(screen.getByTestId('profile-page-header')).toBeInTheDocument();
  });
});
