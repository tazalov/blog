import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import {
  StoreDecorator,
} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import avatar from '@/shared/assets/tests/user.jpg';
import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  decorators: [StoreDecorator({
    profile: {
      form: {
        username: 'myusername',
        first: 'Sam',
        lastname: 'Smith',
        avatar,
        age: 20,
        city: 'Moscow',
        currency: Currency.EUR,
        country: Countries.Russia,
      },
      readonly: true,
    },
  })],
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
