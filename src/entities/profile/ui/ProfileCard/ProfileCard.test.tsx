import { screen } from '@testing-library/react';
import { ProfileCard } from './ProfileCard';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('ProfileCard component', () => {
  it('render without error', () => {
    componentRender(<ProfileCard />);
    expect(screen.getByTestId('profile_card')).toBeInTheDocument();
  });
});
