import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';

describe('Button', () => {
  test('children have a text', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('have a class clean (using cn)', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
});
