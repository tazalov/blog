import { screen } from '@testing-library/react';
import { Select } from './Select';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('Select component', () => {
  it('render without error', () => {
    componentRender(<Select label="label" />);
    expect(screen.getByText('label>')).toBeInTheDocument();
  });
});
