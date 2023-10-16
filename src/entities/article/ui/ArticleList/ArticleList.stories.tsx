import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';
import { ArticleViewMode } from '@/entities/article';
import { article } from '../../model/const/tests/article';

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    articles: {
      description: 'Array of article object',
      control: false,
    },
    viewMode: {
      description: 'Preview of the article',
      options: [ArticleViewMode.BIG, ArticleViewMode.SMALL],
    },
    isLoading: {
      description: 'Flag when loading data',
      control: 'boolean',
    },
  },

} satisfies Meta<typeof ArticleList>;

export default meta;

type Story = StoryObj<typeof meta>;

const articlesList = (view: ArticleViewMode) => new Array(view === ArticleViewMode.SMALL ? 9 : 3)
  .fill(0)
  .map((el, i) => ({
    ...article,
    id: `${i + 1}`,
  }));

export const Big: Story = {
  args: {
    viewMode: ArticleViewMode.BIG,
    articles: articlesList(ArticleViewMode.BIG),
  },
};

export const BigIsLoading: Story = {
  args: {
    isLoading: true,
    viewMode: ArticleViewMode.BIG,
    articles: [],
  },
};

export const Small: Story = {
  args: {
    viewMode: ArticleViewMode.SMALL,
    articles: articlesList(ArticleViewMode.SMALL),
  },
};

export const SmallIsLoading: Story = {
  args: {
    isLoading: true,
    viewMode: ArticleViewMode.SMALL,
    articles: [],
  },
};
