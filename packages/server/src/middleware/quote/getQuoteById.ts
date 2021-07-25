import { Request, Response } from 'express'

import { getQuoteById as getQuote } from '@services/getQuoteById'

import { getQuoteById as getQuoteSchema } from '@schema/quote'

import { IQuote } from '@interfaces/quote'

export const getQuoteById = (req: Request, res: Response) => {
  const { id } = req.params

  getQuoteSchema
    .validateAsync({ id })
    .then(async ({ id }: Partial<IQuote>) => {
      const match = await getQuote(id)

      match ? res.send(match) : res.sendStatus(404)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
