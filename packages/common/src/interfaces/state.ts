import { IQuote } from './quote'

export enum Orientation {
  PORTRAIT = 'portrait',
  ALBUM = 'album'
}

export interface StylingState {
  orientation: Orientation | null
}

export interface GlobalState {
  appIsReady: boolean
}

export interface QuoteState {
  currentQuote: IQuote
}

export interface ShareState {
  dialogIsVisible: boolean
}

export interface CombinedAppState {
  global: GlobalState
  styling?: StylingState
  quotes?: QuoteState
  share?: ShareState
}
