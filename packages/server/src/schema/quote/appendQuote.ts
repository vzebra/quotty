import Joi from 'joi'

import { authorConstraint, tagsConstraint, textConstraint } from './constraints'

export const appendQuote = Joi.object({
  author: authorConstraint.required(),
  tags: tagsConstraint,
  text: textConstraint.required()
})
