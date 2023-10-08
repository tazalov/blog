import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import avatar from '../../assets/tests/user.jpg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
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
    src: {
      description: 'URL for image',
      control: false,
    },
    size: {
      description: 'Size avatar',
      control: 'number',
    },
    alt: {
      description: 'Alt attribute for img tag',
    },
  },

} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    size: 200,
    src: avatar,
  },
};
