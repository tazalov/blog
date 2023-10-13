import type { Meta, StoryObj } from '@storybook/react';
import { ArticleListItem } from './ArticleListItem';
import { ArticleViewMode } from '@/entities/article';
import { article } from '../../model/const/tests/article';

const meta = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    article: {
      description: 'Article object',
    },
    viewMode: {
      description: 'Preview of the article',
      options: [ArticleViewMode.BIG, ArticleViewMode.SMALL],
    },
  },

} satisfies Meta<typeof ArticleListItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Big: Story = {
  args: {
    article,
    viewMode: ArticleViewMode.BIG,
  },

};

export const Small: Story = {
  args: {
    article,
    viewMode: ArticleViewMode.SMALL,
  },
};
