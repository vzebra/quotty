import { getQuote } from './config'

export interface QuoteApi {
  getRandomQuote: () => Promise<string>
}

export const getRandomQuote = () => getQuote('/random')
