import type { Meta, StoryObj } from '@storybook/react';
import { NotFound } from './NotFound';
import {
  PagesDecorator,
} from '@/shared/config/storybook/stories-decorators/PagesDecorator/PagesDecorator';

const meta = {
  title: 'pages/NotFound',
  component: NotFound,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [PagesDecorator],
} satisfies Meta<typeof NotFound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
