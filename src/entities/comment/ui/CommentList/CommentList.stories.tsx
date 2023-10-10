import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comments/CommentList', // change
  component: CommentList,
  parameters: {
    layout: 'centered', // change
  },
  argTypes: {
    comments: {
      description: 'Array comments',
      control: false,
    },
    isLoading: {
      description: 'Flag when sending a request (for CommentCard)',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof CommentList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    comments: [
      {
        id: '1',
        text: 'Some comment description',
        user: {
          id: '1',
          username: 'admin',
          avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
        },
      },
      {
        id: '2',
        text: 'Some comment description2',
        user: {
          id: '2',
          username: 'user',
          avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
        },
      },
    ],
  },
};

export const EmptyArray: Story = {
  args: {
    comments: [],
  },
};
