import Joi from 'joi'
import { idConstraint } from './constraints'

export const getQuoteById = Joi.object({
  id: idConstraint.required()
})
