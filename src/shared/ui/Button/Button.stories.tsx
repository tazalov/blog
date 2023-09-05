import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Label text button or other React-component.',
      control: 'text',
    },
    theme: {
      description: 'The theme of the button that we pass from the parent.',
      control: false,
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: ButtonTheme.SECONDARY,
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    theme: ButtonTheme.OUTLINE,
  },
};

export const Clear: Story = {
  args: {
    children: 'Clear',
    theme: ButtonTheme.CLEAR,
  },
};
