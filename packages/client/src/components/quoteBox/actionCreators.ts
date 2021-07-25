import { IQuote } from '@interfaces/quote'
import { QuoteActionType } from './actions'

export const setCurrentQuote = (currentQuote: IQuote) => ({
  type: QuoteActionType.SET_CURRENT_QUOTE,
  currentQuote
})

export const reportFetchQuoteError = (fetchError: Error) => ({
  type: QuoteActionType.REPORT_FETCH_QUOTE_ERROR,
  fetchError
})

export const fetchQuote = () => ({
  type: QuoteActionType.FETCH_QUOTE
})
