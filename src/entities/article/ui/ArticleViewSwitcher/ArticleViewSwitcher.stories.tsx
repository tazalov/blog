import type { Meta, StoryObj } from '@storybook/react';
import { ArticleViewSwitcher } from './ArticleViewSwitcher';
import { ArticleViewMode } from '@/entities/article';

const meta = {
  title: 'entities/ArticleDetails/ArticleViewSwitcher',
  component: ArticleViewSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    viewMode: {
      description: 'Current view mode',
      control: false,
    },
    changeView: {
      description: 'Function for change view mode',
      action: 'View mode changed!',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof ArticleViewSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;
export const Demo: Story = {
  args: {
    viewMode: ArticleViewMode.SMALL,
  },
};
