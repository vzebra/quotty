import Joi from 'joi'

import {
  idConstraint,
  authorConstraint,
  textConstraint,
  tagsConstraint
} from './constraints'

export const updateQuote = Joi.object({
  id: idConstraint.required(),
  author: authorConstraint,
  text: textConstraint,
  tags: tagsConstraint
})
