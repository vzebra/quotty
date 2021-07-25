import Joi from 'joi'
import { idConstraint } from './constraints'

export const markQuoteDeleted = Joi.object({
  id: idConstraint.required()
})
