import { User } from '@/entities/user';

export interface CommentT {
  id: string
  user: User
  text: string
}
