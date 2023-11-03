import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

const meta = {
  title: 'shared/Tabs', // change
  component: Tabs,
  parameters: {
    layout: 'centered', // change
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
    tabs: {
      description: 'Array tabs items',
      control: false,
    },
    value: {
      description: 'Current tab value',
      control: false,
    },
    handleTabClick: {
      description: 'Function for change current tabs',
      action: 'Tab is changed!',
    },
  },

} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    tabs: [
      { value: 'tab 1', content: 'content 1' },
      { value: 'tab 2', content: 'content 2' },
      { value: 'tab 3', content: 'content 3' },
      { value: 'tab 4', content: 'content 4' },
    ],
    value: 'tab 2',
  },
};
