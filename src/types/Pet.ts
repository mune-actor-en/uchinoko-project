export type Pet = {
  id?: number
  name: string
  sex: Sex
  imagePath: string
  userId: number
  birthday: Date
  pickupDate: Date
  attractive_feature: string
  createdAt?: Date
  updatedAt?: Date
}

export enum Sex {
  MALE = 'male',
  FEMALE = 'female',
}