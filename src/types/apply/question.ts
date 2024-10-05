import type { GeneralState } from './general-state'
import type { BcmState } from './specific/bcm-state'
import type { BdnState } from './specific/bdn-state'
import type { BnsState } from './specific/bns-state'
import type { BskState } from './specific/bsk-state'
import type { BttState } from './specific/btt-state'

export type ApplyQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof GeneralState
  basis: string
}

export type ApplyBcmQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof BcmState
  basis: string
}

export type ApplyBttQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof BttState
  basis: string
}

export type ApplyBskQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof BskState
  basis: string
}

export type ApplyBdnQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof BdnState
  basis: string
}

export type ApplyBnsQuestion = {
  question: string
  required: boolean
  inputType: 'text' | 'textarea' | 'date' | 'checkbox'
  placeholder: string | undefined
  image: string | undefined
  name: keyof BnsState
  basis: string
}
