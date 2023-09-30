import type { Meta, StoryObj } from '@storybook/react';
import { NotFoundPage } from './NotFoundPage';
import {
  PagesDecorator,
} from '@/shared/config/storybook/stories-decorators/PagesDecorator/PagesDecorator';

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [PagesDecorator],
} satisfies Meta<typeof NotFoundPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
