import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { ArticleBlockType } from '@/entities/article/model/types/article';

const meta = {
  title: 'entities/ArticleDetails/ArticleCodeBlockComponent', // change
  component: ArticleCodeBlockComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen', // change
  },
  argTypes: {
    block: {
      description: 'Object with code',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof ArticleCodeBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.CODE,
      code: 'const meta = {\n'
          + "  title: 'entities/ArticleDetails/ArticleCodeBlockComponent',\n"
          + '  component: ArticleCodeBlockComponent,\n'
          + "  tags: ['autodocs'],\n"
          + '  parameters: {\n'
          + "    layout: 'fullscreen',\n"
          + '  },\n'
          + '  argTypes: {},\n'
          + '\n'
          + '} satisfies Meta<typeof ArticleCodeBlockComponent>',
    },
  },
};
