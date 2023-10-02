import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
  title: 'widgets/Sidebar/Sidebar',
  component: Sidebar,
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

} satisfies Meta<typeof Sidebar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
