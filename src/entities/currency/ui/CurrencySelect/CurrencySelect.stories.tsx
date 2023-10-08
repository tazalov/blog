import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
    value: {
      description: 'Selected currency',
      control: 'select',
    },
    onChange: {
      description: 'Function for change current currency',
      action: 'Currency changed!',
    },
  },

} satisfies Meta<typeof CurrencySelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};

export const Readonly: Story = {
  args: {
    readonly: true,
  },
};
