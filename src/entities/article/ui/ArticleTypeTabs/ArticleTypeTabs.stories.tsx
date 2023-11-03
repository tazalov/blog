import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTypeTabs } from './ArticleTypeTabs';

const meta = {
  title: 'entities/Article/ArticleTypeTabs', // change
  component: ArticleTypeTabs,
  parameters: {
    layout: 'centered', // change
  },
  argTypes: {},

} satisfies Meta<typeof ArticleTypeTabs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {},
};
