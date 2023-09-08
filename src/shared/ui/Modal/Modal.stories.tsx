import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    isOpen: {
      description: 'Value for switching the visibility of the modal window.',
      control: 'boolean',
    },
    children: {
      description: 'Content of the modal window - test or React component',
      defaultValue: 'Here be text or other React component',
      control: 'text',
    },
    onClose: {
      description: 'Function for closing the modal window (works by pressing Esc or clicking outside the modal window)',
      action: 'Modal window was closed',
    },
  },

} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    isOpen: true,
    children: 'Here be text or other React component',
  },
};
