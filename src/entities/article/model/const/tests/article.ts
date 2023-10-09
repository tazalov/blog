import { ArticleT } from '@/entities/article';
import { ArticleType, ArticleBlockType } from '../../types/article';

export const article: ArticleT = {
  id: '1',
  title: 'title article',
  subtitle: 'subtitle article',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '09.10.2023',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      title: 'title',
      paragraphs: [
        'text',
      ],
    },
  ],
};
