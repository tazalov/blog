import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta = {
  title: 'entities/Comments/CommentCard',
  component: CommentCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    comment: {
      description: 'Current comment',
      control: false,
    },
    isLoading: {
      description: 'Flag when sending a request',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof CommentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    comment: {
      id: '1',
      text: 'Some comment description',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
      },
    },
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};
