import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta = {
  title: 'entities/ProfileCard', // change
  component: ProfileCard,
  parameters: {
    layout: 'fullscreen', // change
  },
  argTypes: {},

} satisfies Meta<typeof ProfileCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
