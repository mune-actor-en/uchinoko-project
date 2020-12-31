export type Post = {
  id?: string
  imagePath?: string
  description: string
  isPublished: boolean
  petId: number
  userId: number
  createdAt?: Date
  updatedAt?: Date
}