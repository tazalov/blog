import type { Meta, StoryObj } from '@storybook/react';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    to: '/',
  },
  argTypes: {
    children: {
      description: 'Label text link or other React-component.',
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
    to: {
      description: 'Changes the route in the browser address bar.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: AppLinkTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: AppLinkTheme.SECONDARY,
  },
};
