import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
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
      description: 'Selected country',
      control: 'select',
    },
    onChange: {
      description: 'Function for change current country',
      action: 'Country changed!',
    },
  },

} satisfies Meta<typeof CountrySelect>;

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
