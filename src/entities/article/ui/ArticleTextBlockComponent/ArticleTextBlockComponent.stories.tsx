import type { Meta, StoryObj } from '@storybook/react';
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent';
import { ArticleBlockType } from '@/entities/article/model/types/article';

const meta = {
  title: 'entities/ArticleDetails/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    block: {
      description: 'Object with array paragraphs',
    },
    className: {
      description: 'The class that is passed from the parent component is used for positioning.',
      defaultValue: 'undefined',
      control: false,
    },
  },

} satisfies Meta<typeof ArticleTextBlockComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {
  args: {
    block: {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
  },
};
