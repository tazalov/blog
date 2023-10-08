import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      control: false,
    },
    label: {
      description: 'Text after select',
      control: 'text',
    },
    value: {
      description: 'Selected value',
      control: 'select',
    },
    options: {
      description: 'Array options objects',
    },
    onChange: {
      description: 'Function for change current value',
      action: 'Value changed!',
    },
  },

} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '1', content: 'First' },
      { value: '2', content: 'Second' },
      { value: '3', content: 'Third' },
    ],
  },
};

export const Readonly: Story = {
  args: {
    label: 'Select value',
    options: [
      { value: '1', content: 'First' },
      { value: '2', content: 'Second' },
      { value: '3', content: 'Third' },
    ],
    readonly: true,
  },
};
