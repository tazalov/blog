import type { Meta, StoryObj } from '@storybook/react';
import { ProfilePageHeader } from './ProfilePageHeader';

const meta = {
  title: 'pages/ProfilePage/ProfilePageHeader', // change
  component: ProfilePageHeader,
  parameters: {
    layout: 'centered', // change
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof ProfilePageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
