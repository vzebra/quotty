import { Request, Response } from 'express'

import { PaginationParams } from '@interfaces/paginationParams'

import { getPaginatedQuotes as getPaginatedQuotesData } from '@services/getPaginatedQuotes'

import { getPaginatedQuotes as getPaginatedQuotesSchema } from '@schema/quote'

export const getPaginatedQuotes = (req: Request, res: Response) => {
  const paginationParams: PaginationParams = req.query

  getPaginatedQuotesSchema
    .validateAsync(paginationParams)
    .then(async (paginationParams: PaginationParams) => {
      const quotesPage = await getPaginatedQuotesData(paginationParams)

      quotesPage.length ? res.send(quotesPage) : res.sendStatus(404)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
