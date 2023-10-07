import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
  title: 'shared/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: {
      description: 'Label text',
      control: 'text',
    },
    value: {
      description: 'Current value input',
      control: 'text',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
    type: {
      description: 'Standard input type.',
      options: ['text', 'password', 'number'],
      control: 'radio',
    },
    onChange: {
      description: 'Function for controlled input.',
      control: false,
    },
    autoFocus: {
      description: 'Adding autofocus when component is render.',
      control: false,
    },
    readonly: {
      description: 'Flag to activate readonly',
      control: 'boolean',
    },
  },

} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    placeholder: 'Enter your text',
    value: 'you text',
  },
};

export const Readonly: Story = {
  args: {
    placeholder: 'Enter your text',
    value: 'you text',
    readonly: true,
  },
};
