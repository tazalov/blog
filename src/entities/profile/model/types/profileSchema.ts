import { Currency, Countries } from '@/shared/const/common';

export interface ProfileT {
  first: string
  lastname: string
  age: number
  currency: Currency
  country: Countries
  city: string
  username: string
  avatar: string
}

export interface ProfileSchema {
  profile: ProfileT
  isLoading: boolean
  error?: string
  readonly: boolean
}
