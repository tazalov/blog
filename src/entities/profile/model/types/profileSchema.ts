import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country/model/types/country';

export enum ValidateProfileData {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR'
}

export interface ProfileT {
  first?: string
  lastname?: string
  age?: number
  currency?: Currency
  country?: Countries
  city?: string
  username?: string
  avatar?: string
}

export interface ProfileSchema {
  data?: ProfileT
  form?: ProfileT
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileData[]
}
