export interface IQuote {
  id: string
  author: string
  text: string
  tags?: string[]
  createdBy?: string
  createdAt?: string
  updatedAt?: string
  isDeleted: boolean
}
