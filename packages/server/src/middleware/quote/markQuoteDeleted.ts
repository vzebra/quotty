import { Request, Response } from 'express'

import { markQuoteDeleted as markQuoteDeletedData } from '@services/markQuoteDeleted'

import { markQuoteDeleted as markQuoteDeletedSchema } from '@schema/quote'

import { IQuote } from '@interfaces/quote'

export const markQuoteDeleted = (req: Request, res: Response) => {
  const { id } = req.params

  markQuoteDeletedSchema
    .validateAsync({ id })
    .then(async ({ id }: Partial<IQuote>) => {
      const isQuoteMarkedDeleted = await markQuoteDeletedData(id)

      res.sendStatus(isQuoteMarkedDeleted ? 200 : 404)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
