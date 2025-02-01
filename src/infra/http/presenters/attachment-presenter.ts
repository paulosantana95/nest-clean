import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

type AttachmentPresenterResponse = Omit<Attachment, 'id' | 'equals'> & {
  id: string
}

export class AttachmentPresenter {
  static toHTTP(attachment: Attachment): AttachmentPresenterResponse {
    return {
      id: attachment.id.toString(),
      url: attachment.url,
      title: attachment.title,
    }
  }
}
