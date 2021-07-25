import Quote from '@models/quote'

import { IQuote } from '@interfaces/quote'

export const updateQuote = async ({ id, ...quoteDetails }: Partial<IQuote>) => {
  const [, [updatedQuote]] = await Quote.update(quoteDetails, {
    where: {
      id
    },
    returning: true
  })
  return updatedQuote
}
