import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    sendComment: {
      description: 'Function for sendComment',
      action: 'Comment created!',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
  },

} satisfies Meta<typeof AddCommentForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
