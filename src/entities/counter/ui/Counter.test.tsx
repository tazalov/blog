import { screen, waitFor } from '@testing-library/react';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './counter';
import {
  componentRender,
} from '@/shared/config/tests/componentRender/componentRender';

describe('Counter', () => {
  test('counter render', () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 5 },
      },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('5');
  });

  test('title value is incremented', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
    });
    await userEvent.click(screen.getByTestId('incr-btn'));
    await waitFor(() => expect(screen.getByTestId('value-title')).toHaveTextContent('11'));
  });

  test('title value is decremented', async () => {
    componentRender(<Counter />, {
      initialState: {
        counter: { value: -1 },
      },
    });
    await userEvent.click(screen.getByTestId('decr-btn'));
    await userEvent.click(screen.getByTestId('decr-btn'));
    await waitFor(() => expect(screen.getByTestId('value-title')).toHaveTextContent('-3'));
  });
});
