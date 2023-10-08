import { Currency } from '@/entities/currency';
import { Countries } from '@/entities/country/model/types/country';

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
}
