import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ProfileT } from '@/entities/profile';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';
import avatar from '@/shared/assets/tests/user.jpg';

const meta = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
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
  avatar,
  age: 20,
  city: 'Moscow',
  currency: Currency.EUR,
  country: Countries.Russia,
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
