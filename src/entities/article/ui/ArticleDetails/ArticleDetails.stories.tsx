import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetails } from './ArticleDetails';
import {
  StoreDecorator,
} from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import {
  ArticleBlockType,
  ArticleType,
  ArticleT,
} from '../../model/types/article';

const meta = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    id: {
      description: 'Id article for send request',
      control: false,
    },
  },

} satisfies Meta<typeof ArticleDetails>;

export default meta;

type Story = StoryObj<typeof meta>;

const article:ArticleT = {
  id: '1',
  title: 'JavaScript news',
  subtitle: 'What new in JS 2023?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '09.10.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. В нашем случае речь идёт о браузерах и о серверной платформе Node.js. Если до сих пор вы не написали ни строчки кода на JS и читаете этот текст в браузере, на настольном компьютере, это значит, что вы буквально в считанных секундах от своей первой JavaScript-программы.',
      ],
    },
    {
      id: '4',
      type: ArticleBlockType.CODE,
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '2',
      type: ArticleBlockType.IMAGE,
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/d56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
  ],
};

export const Demo: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({ articleDetails: { data: article } })],
};

export const Error: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({ articleDetails: { error: 'Some error' } })],
};

export const IsLoading: Story = {
  args: {
    id: '1',
  },
  decorators: [StoreDecorator({ articleDetails: { isLoading: true } })],
};
