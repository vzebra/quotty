import { IQuote } from '@interfaces/quote'

import Quote from '@models/quote'

export const appendQuote = async (quoteDetails: Partial<IQuote>) => {
  const newQuote = await Quote.create(quoteDetails)
  return newQuote
}
