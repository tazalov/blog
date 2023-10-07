import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ProfileT } from '@/entities/profile';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    data: {
      description: 'Profile data',
      control: false,
    },
    error: {
      description: 'Error when receiving or updating data',
      control: 'text',
    },
    isLoading: {
      description: 'Flag when loading data',
      control: 'boolean',
    },
    readonly: {
      description: 'Flag for edit mode profile data',
      control: 'boolean',
    },
  },

} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

const profile: ProfileT = {
  username: 'myusername',
  first: 'Sam',
  lastname: 'Smith',
  avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
  age: 20,
  city: 'Moscow',
};

export const Demo: Story = {
  args: {
    data: profile,
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithError: Story = {
  args: {
    error: 'Some server error',
  },
};
