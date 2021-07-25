import { Router } from 'express'

import {
  getQuoteById,
  updateQuote,
  markQuoteDeleted,
  findRandomQuote,
  appendQuote,
  getPaginatedQuotes
} from '@middleware/quote'

export const quoteRouter = Router()

quoteRouter.get('/random', findRandomQuote)

quoteRouter.get('/:id', getQuoteById)

quoteRouter.put('/:id', updateQuote)

quoteRouter.delete('/:id', markQuoteDeleted)

quoteRouter.post('/', appendQuote)

quoteRouter.get('/', getPaginatedQuotes)
