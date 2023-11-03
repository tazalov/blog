import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortSelect } from './ArticleSortSelect';
import { ArticleSortField } from '@/entities/article';

const meta = {
  title: 'entities/Article/ArticleSortSelect',
  component: ArticleSortSelect,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
    sort: {
      description: 'Current sort value',
      control: 'select',
    },
    order: {
      description: 'Current order value',
      control: 'select',
    },
    onChangeOrder: {
      description: 'Function for change order',
      action: 'order changed!',
    },
    onChangeSort: {
      description: 'Funcrion for change sort',
      action: 'sort chaged!',
    },
  },

} satisfies Meta<typeof ArticleSortSelect>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    sort: ArticleSortField.CREATED,
    order: 'asc',
  },
};
