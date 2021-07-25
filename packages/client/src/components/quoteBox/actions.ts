import { IQuote } from '@interfaces/quote'

export enum QuoteActionType {
  FETCH_QUOTE = 'fetchQuote',
  SET_CURRENT_QUOTE = 'setCurrentQuote',
  REPORT_FETCH_QUOTE_ERROR = 'reportFetchQuoteReport'
}

export interface SetCurrentQuoteAction {
  type: QuoteActionType
  currentQuote: IQuote
}

export type QuoteAction = SetCurrentQuoteAction
