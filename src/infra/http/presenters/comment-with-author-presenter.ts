import { CommentWithAuthor } from '@/domain/forum/enterprise/entities/value-objects/comment-with-author'

type CommentWithAuthorPresenterResponse = Omit<
  CommentWithAuthor,
  'commentId' | 'authorId' | 'equals' | 'author'
> & {
  commentId: string
  authorId: string
  authorName: string
}

export class CommentWithAuthorPresenter {
  static toHTTP(
    commentWithAuthor: CommentWithAuthor,
  ): CommentWithAuthorPresenterResponse {
    return {
      commentId: commentWithAuthor.commentId.toString(),
      authorId: commentWithAuthor.authorId.toString(),
      authorName: commentWithAuthor.author,
      content: commentWithAuthor.content,
      createdAt: commentWithAuthor.createdAt,
      updatedAt: commentWithAuthor.updatedAt,
    }
  }
}
