import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import {
  PagesDecorator,
} from '@/shared/config/storybook/stories-decorators/PagesDecorator/PagesDecorator';

const meta = {
  title: 'pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [PagesDecorator],
} satisfies Meta<typeof MainPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
