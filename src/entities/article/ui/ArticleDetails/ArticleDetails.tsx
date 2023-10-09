import { useEffect, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { cn } from '@/shared/lib/classNames/cn';
import s from './ArticleDetails.module.scss';
import {
  ReducersList,
  DynamicModuleLoader,
} from '@/shared/lib/dynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetails.slice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import {
  fetchArticleById,
} from '../../model/services/fetchArticleById/fetchArticleById';
import {
  getArticleDetailsError,
  getArticleDetailsData,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import {
  TextTheme, Text, TextAlign, TextSize,
} from '@/shared/ui/Text/Text';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/Icon/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import {
  ArticleCodeBlockComponent,
} from '@/entities/article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import {
  ArticleTextBlockComponent,
} from '@/entities/article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
  ArticleImageBlockComponent,
} from '@/entities/article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';

const initialReducers: ReducersList = { articleDetails: articleDetailsReducer };

interface ArticleDetailsPT {
  className?: string;
  id: string
}

export const ArticleDetails = memo(({ className, id }:ArticleDetailsPT) => {
  const { t } = useTranslation('article-details');

  const dispatch = useAppDispatch();

  const article = useSelector(getArticleDetailsData);
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE: {
      return <ArticleCodeBlockComponent key={block.id} block={block} className={s.block} />;
    }
    case ArticleBlockType.TEXT: {
      return <ArticleTextBlockComponent key={block.id} block={block} className={s.block} />;
    }
    case ArticleBlockType.IMAGE: {
      return <ArticleImageBlockComponent key={block.id} block={block} className={s.block} />;
    }
    default: {
      return null;
    }
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton width={200} height={200} border="50%" className={s.avatar} />
        <Skeleton width={300} height={32} className={s.title} />
        <Skeleton width={500} height={24} className={s.skeleton} />
        <Skeleton width="100%" height={200} className={s.skeleton} />
        <Skeleton width="100%" height={200} className={s.skeleton} />
        <Skeleton width="100%" height={200} className={s.skeleton} />
      </>
    );
  } else if (error) {
    content = (
      <Text title={t('Something went wrong')} text={error} theme={TextTheme.ERROR} align={TextAlign.CENTER} />
    );
  } else {
    content = (
      <>
        <div className={s.avatarWrapper}>
          <Avatar size={200} src={article?.img} />
        </div>
        <Text className={s.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <div className={s.articleInfo}>
          <Icon Svg={EyeIcon} />
          <Text text={`${article?.views}`} />
        </div>
        <div className={s.articleInfo}>
          <Icon Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={initialReducers}>
      <div className={cn(s.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
