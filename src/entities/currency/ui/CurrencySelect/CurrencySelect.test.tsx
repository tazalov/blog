import { screen } from '@testing-library/react';
import { CurrencySelect } from './CurrencySelect';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('CurrencySelect component', () => {
  it('render without error', () => {
    componentRender(<CurrencySelect />);
    expect(screen.getByText('Enter currency>')).toBeInTheDocument();
  });
});
