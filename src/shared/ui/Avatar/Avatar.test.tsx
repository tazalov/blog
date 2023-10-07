import { render } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar component', () => {
  it('render without error', () => {
    render(<Avatar />);
    // expect().toBeInTheDocument();
  });
});
