import { Comment } from '@/domain/forum/enterprise/entities/comment'
import { AnswerCommentProps } from '@/domain/forum/enterprise/entities/answer-comment'
import { QuestionCommentProps } from '@/domain/forum/enterprise/entities/question-comment'

export class CommentPresenter {
  static toHTTP(comment: Comment<QuestionCommentProps | AnswerCommentProps>) {
    return {
      id: comment.id.toString(),
      content: comment.content,
      createdAt: comment.createdAt,
      updatedAt: comment.updatedAt,
    }
  }
}
