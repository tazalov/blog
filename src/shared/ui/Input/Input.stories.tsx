import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import {
  SharedDecorator,
} from '@/shared/config/storybook/stories-decorators/SharedDecorator/SharedDecorator';

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [SharedDecorator],
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
