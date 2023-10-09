import { render } from '@testing-library/react';
import { Skeleton } from './Skeleton';

describe('Skeleton component', () => {
  it('render without error', () => {
    render(<Skeleton />);
    // expect().toBeInTheDocument();
  });
});
