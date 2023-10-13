import { ArticleT, ArticleType, ArticleBlockType } from '../../types/article';

export const article: ArticleT = {
  id: '1',
  title: 'title article',
  subtitle: 'subtitle article',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '09.10.2023',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
  },
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
