import { Request, Response } from 'express'

import { IQuote } from '@interfaces/quote'

import { updateQuote as updateQuoteData } from '@services/updateQuote'

import { updateQuote as updateQuoteSchema } from '@schema/quote'

export const updateQuote = (req: Request, res: Response) => {
  const { id } = req.params
  const { ...quoteDetails }: Partial<IQuote> = req.body

  updateQuoteSchema
    .validateAsync({ id, ...quoteDetails })
    .then(async ({ id, ...quoteDetails }: Partial<IQuote>) => {
      const updatedQuote = await updateQuoteData({ id, ...quoteDetails })

      updatedQuote ? res.send(updatedQuote) : res.sendStatus(404)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
