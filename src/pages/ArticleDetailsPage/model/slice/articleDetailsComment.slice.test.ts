import {
  ArticleDetailsCommentSchema,
} from '../types/ArticleDetailsCommentSchema';
import { articleDetailsCommentReducer } from './articleDetailsComment.slice';
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { CommentT } from '@/entities/comment';

const comments: CommentT[] = [
  { id: '1', text: 'comment1', user: { id: '1', username: 'username1', avatar: 'asd' } },
  { id: '2', text: 'comment2', user: { id: '2', username: 'username2', avatar: 'asd' } },
];

describe('articleDetailsComment.slice.test', () => {
  it('set isLoading, clear errors (fetchCommentsByArticleId)', () => {
    const initialState: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: false,
      error: 'some error',
    };
    const newState = articleDetailsCommentReducer(initialState as ArticleDetailsCommentSchema, fetchCommentsByArticleId.pending);
    expect(newState.isLoading).toBeTruthy();
    expect(newState.error).not.toBeDefined();
  });
  it('fetchCommentsByArticleId service fulfilled', () => {
    const initialState: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: true,
      error: 'some error',
    };
    const newState = articleDetailsCommentReducer(initialState as ArticleDetailsCommentSchema, fetchCommentsByArticleId.fulfilled(comments, '1', ''));
    expect(newState.isLoading).toBeFalsy();
    expect(newState.error).not.toBeDefined();
    expect(newState.ids).toEqual(['1', '2']);
    expect(newState.entities).toEqual({
      1: { id: '1', text: 'comment1', user: { id: '1', username: 'username1', avatar: 'asd' } },
      2: { id: '2', text: 'comment2', user: { id: '2', username: 'username2', avatar: 'asd' } },
    });
  });
});
