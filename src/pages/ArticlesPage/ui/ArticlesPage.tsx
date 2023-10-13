import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import s from './ArticlesPage.module.scss';
import { cn } from '@/shared/lib/classNames/cn';
import { ArticleList, ArticleT, ArticleViewMode } from '@/entities/article';

const article = {
  id: '1',
  title: 'JavaScript news',
  subtitle: 'What new in JS 2023?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '09.10.2023',
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://social-network.samuraijs.com/activecontent/images/users/29403/user.jpg?v=56',
  },
  type: [
    'IT',
  ],
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Он'
        + 'а выводит куда-либо фразу «Hello, world!», или другую подобную, средствами некоего языка.',
      ],
    },
    {
      id: '4',
      type: 'CODE',
      code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    '
          + '<script>\n      document.getElementById("hello").innerHTML = '
          + '"Hello, world!";\n    </script>\n  </body>\n</html>;',
    },
    {
      id: '5',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'Программа, которую по традиции называют «Hello, world!», очень проста. Она выводит куда-либо фразу '
        + '«Hello, world!», или другую подобную, средствами некоего языка.',
      ],
    },
    {
      id: '2',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/'
          + 'd56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 1 - скриншот сайта',
    },
    {
      id: '3',
      type: 'CODE',
      code: "const path = require('path');\n\nconst server = "
          + 'jsonServer.create();\n\nconst router = jsonServer.router'
          + "(path.resolve(__dirname, 'db.json'));\n\nserver.use(jsonServer.defaults({}));"
          + '\nserver.use(jsonServer.bodyParser);',
    },
    {
      id: '7',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. ',
      ],
    },
    {
      id: '8',
      type: 'IMAGE',
      src: 'https://hsto.org/r/w1560/getpro/habr/post_images/d56/a02/ffc/'
          + 'd56a02ffc62949b42904ca00c63d8cc1.png',
      title: 'Рисунок 2 - скриншот сайта',
    },
    {
      id: '9',
      type: 'TEXT',
      title: 'Заголовок этого блока',
      paragraphs: [
        'JavaScript — это язык, программы на котором можно выполнять в разных средах. '
        + 'В нашем случае речь идёт о '
        + 'браузерах и о серверной платформе Node.js. Если до сих пор вы не написали '
        + 'ни строчки кода на JS и читаете '
        + 'этот текст в браузере, на настольном компьютере, это значит, что вы букв'
        + 'ально в считанных секундах от своей '
        + 'первой JavaScript-программы.',
      ],
    },
  ],
} as ArticleT;

const ArticlesPage: FC = ({}) => {
  const { t } = useTranslation();
  return (
    <div className={cn(s.ArticlesPage, {}, [])}>
      <ArticleList
        isLoading
        viewMode={ArticleViewMode.BIG}
        articles={
          new Array(16).fill(0).map((el, i) => ({
            ...article,
            id: `${i + 1}`,
          }))
        }
      />
      {t('ArticlesPage')}
    </div>
  );
};

export default memo(ArticlesPage);
