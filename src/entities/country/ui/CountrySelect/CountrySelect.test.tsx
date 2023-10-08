import { screen } from '@testing-library/react';
import { CountrySelect } from './CountrySelect';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('CountrySelect component', () => {
  it('render without error', () => {
    componentRender(<CountrySelect />);
    expect(screen.getByText('Country>')).toBeInTheDocument();
  });
});
