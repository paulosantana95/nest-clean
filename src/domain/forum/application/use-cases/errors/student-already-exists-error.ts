import { UseCaseError } from '@/core/errors/use-cas-error'

export class StudentAlreadyExistsError extends Error implements UseCaseError {
  constructor(identifier: string) {
    super(`Student "${identifier}" already exists`)
  }
}
