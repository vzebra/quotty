import Joi from 'joi'
import { randomQuoteParamsConstraint } from './constraints'

export const findRandomQuote = Joi.object(randomQuoteParamsConstraint)
