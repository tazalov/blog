import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilters } from './ArticlesPageFilters';

const meta = {
  title: 'pages/ArticlesPage/ArticlesPageFilters', // change
  component: ArticlesPageFilters,
  parameters: {
    layout: 'fullscreen', // change
  },
  argTypes: {},

} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
