import { Request, Response } from 'express'

import { IQuote } from '@interfaces/quote'

import { appendQuote as appendQuoteData } from '@services/appendQuote'

import { appendQuote as appendQuoteSchema } from '@schema/quote'

export const appendQuote = (req: Request, res: Response) => {
  const quoteDetails = req.body

  appendQuoteSchema
    .validateAsync(quoteDetails)
    .then(async (quoteDetails: Partial<IQuote>) => {
      const newQuote = await appendQuoteData(quoteDetails)
      res.send(newQuote)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
