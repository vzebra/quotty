import { Request, Response } from 'express'

import { RandomQuoteParams, QueryParam } from '@interfaces/randomQuoteParams'

import { findRandomQuote as findRandomQuoteData } from '@services/findRandomQuote'

import { findRandomQuote as findRandomQuoteSchema } from '@schema/quote'

export const findRandomQuote = (req: Request, res: Response) => {
  const { ...randomQuoteParams }: RandomQuoteParams = req.query

  let tagsContains = randomQuoteParams[QueryParam.TAGS_CONTAINS] || []
  tagsContains = Array.isArray(tagsContains)
    ? tagsContains
    : tagsContains.split(',')
  randomQuoteParams[QueryParam.TAGS_CONTAINS] = tagsContains

  findRandomQuoteSchema
    .validateAsync(randomQuoteParams)
    .then(async (randomQuoteParams: RandomQuoteParams) => {
      const randomQuote = await findRandomQuoteData(randomQuoteParams)

      randomQuote ? res.send(randomQuote) : res.sendStatus(404)
    })
    .catch(({ message }: Error) => res.status(400).send(message))
}
