import type { Meta, StoryObj } from '@storybook/react';
import ProfilePage from './ProfilePage';
import {
  PagesDecorator,
} from '@/shared/config/storybook/stories-decorators/PagesDecorator/PagesDecorator';

const meta = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [PagesDecorator],
} satisfies Meta<typeof ProfilePage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
