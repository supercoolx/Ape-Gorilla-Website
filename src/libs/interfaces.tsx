import { SocialType } from "libs/enums"

export interface BooleanInterface {
  title: string
  selected: boolean
}

export interface ContactInterface {
  icon: JSX.Element
  title: string
  url: string
}

export interface LinkInterface {
  title: string
  link: string
  icon?: JSX.Element
  new?: number
}

export interface NftInterface {
  image: string
  id: number
  address: string
}

export interface PartnerInterface {
  image: string
  link: string
}

export interface PropsInterface {
  admin: boolean
  authenticated: boolean
  path: string
  user: UserInterface
}

export interface QuestionInterface {
  question: string
  answer: JSX.Element
}

export interface RoadmapInterface {
  title: string
  text: string
}

export interface SocialInterface {
  type: SocialType
  link: string
}

export interface SpecialInterface {
  image: string
  id: number
}

export interface TeamInterface {
  name: string
  title: string
  avatar: string
  socials: SocialInterface[]
}

export interface TitleInterface {
  title: string
  text: string
  icon?: JSX.Element
}

export interface UserInterface {
  avatar: string
  username: string
}
