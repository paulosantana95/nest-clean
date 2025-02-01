import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { AttachmentPresenter } from './attachment-presenter'

type QuestionDetailsPresenterResponse = Omit<
  QuestionDetails,
  | 'questionId'
  | 'authorId'
  | 'equals'
  | 'author'
  | 'slug'
  | 'bestAnswerId'
  | 'attachments'
> & {
  questionId: string
  authorId: string
  author: string
  slug: string
  bestAnswerId?: string | null
  attachments: AttachmentPresenter[]
}

export class QuestionDetailsPresenter {
  static toHTTP(
    questionDetails: QuestionDetails,
  ): QuestionDetailsPresenterResponse {
    return {
      questionId: questionDetails.questionId.toString(),
      authorId: questionDetails.authorId.toString(),
      author: questionDetails.author,
      title: questionDetails.title,
      slug: questionDetails.slug.value,
      content: questionDetails.content,
      bestAnswerId: questionDetails.bestAnswerId?.toString(),
      attachments: questionDetails.attachments.map(AttachmentPresenter.toHTTP),
      createdAt: questionDetails.createdAt,
      updatedAt: questionDetails.updatedAt,
    }
  }
}
