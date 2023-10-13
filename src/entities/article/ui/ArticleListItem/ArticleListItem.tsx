import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleListItem.module.scss';
import {
  ArticleT,
  ArticleViewMode,
  ArticleBlockType,
  ArticleTextBlock,
} from '../../model/types/article';
import { Text } from '@/shared/ui/Text/Text';
import { Icon } from '@/shared/ui/Icon/Icon';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Card } from '@/shared/ui/Card/Card';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button/Button';
import {
  ArticleTextBlockComponent,
} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';

interface ArticleListItemPT {
  className?: string
  article: ArticleT
  viewMode:ArticleViewMode
}

export const ArticleListItem = memo(
  ({ className, article, viewMode }: ArticleListItemPT) => {
    const { t } = useTranslation('article-details');
    const navigate = useNavigate();

    const typesItem = <Text text={article.type.join(', ')} className={s.types} />;
    const viewsItem = (
      <>
        <Text text={String(article.views)} className={s.views} />
        <Icon Svg={EyeIcon} />
      </>
    );

    const handleOpenArticle = useCallback(() => {
      navigate(`${RoutePath.article_details}/${article.id}`);
    }, [article.id, navigate]);

    if (viewMode === ArticleViewMode.BIG) {
      const textBlock = article.blocks.find((el) => el.type === ArticleBlockType.TEXT) as ArticleTextBlock;

      return (
        <div className={cn(s.ArticleListItem, {}, [className, s[viewMode]])}>
          <Card>
            <div className={s.header}>
              <Avatar size={30} src={article.user.avatar} />
              <Text text={article.user.username} className={s.userName} />
              <Text text={article.createdAt} className={s.date} />
            </div>
            <Text title={article.title} className={s.title} />
            {typesItem}
            <img src={article.img} alt={article.title} className={s.img} />
            {textBlock && (
              <ArticleTextBlockComponent block={textBlock} className={s.textBlock} />
            )}
            <div className={s.footer}>
              <Button onClick={handleOpenArticle} theme={ButtonTheme.OUTLINE}>
                {`${t('Read more')}...`}
              </Button>
              {viewsItem}
            </div>
          </Card>
        </div>
      );
    }

    return (
      <div className={cn(s.ArticleListItem, {}, [className, s[viewMode]])}>
        <Card>
          <div className={s.imgWrapper} onClick={handleOpenArticle}>
            <img src={article.img} alt={article.title} className={s.img} />
            <Text text={article.createdAt} className={s.date} />
          </div>
          <div className={s.infoWrapper}>
            {typesItem}
            {viewsItem}
          </div>
          <Text title={article.title} className={s.title} />
        </Card>
      </div>
    );
  },
);
