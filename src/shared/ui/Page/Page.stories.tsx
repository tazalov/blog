import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';

const meta = {
  title: 'shared/Page',
  component: Page,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    children: {
      description: 'Some React-component.',
      control: false,
    },
    handleScrollEnd: {
      description: 'Function that is called when an element with a trigger ref gets into the viewport',
      action: 'handleScrollEnd called!',
    },
  },

} satisfies Meta<typeof Page>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    children: 'I am a children',
  },
};
