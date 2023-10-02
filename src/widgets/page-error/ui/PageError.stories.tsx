import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof PageError>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
