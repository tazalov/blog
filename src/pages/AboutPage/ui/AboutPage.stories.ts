import type { Meta, StoryObj } from '@storybook/react';
import AboutPage from './AboutPage';
import {
  PagesDecorator,
} from '@/shared/config/storybook/stories-decorators/PagesDecorator/PagesDecorator';

const meta = {
  title: 'pages/AboutPage',
  component: AboutPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [PagesDecorator],
} satisfies Meta<typeof AboutPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
