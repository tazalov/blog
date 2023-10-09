import type { Meta, StoryObj } from '@storybook/react';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { ArticleBlockType } from '@/entities/article/model/types/article';

const meta = {
  title: 'entities/ArticleDetails/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    block: {
      description: 'Object with title and img src',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof ArticleImageBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    block: {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  },
};
