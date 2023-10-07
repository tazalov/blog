import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    mockData: [
      {
        url: '/profile',
        method: 'GET',
        status: 200,
        response: {
          data: {},
        },
      },
      {
        url: '/profile',
        method: 'PUT',
        status: 200,
        response: {
          data: {},
        },
        delay: 1000,
      },
    ],
  },
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
