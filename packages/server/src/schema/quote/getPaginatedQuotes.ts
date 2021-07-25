import Joi from 'joi'
import { pageSizeConstraint, offsetConstraint } from './constraints'

import { PaginationParam } from '@common/interfaces'

export const getPaginatedQuotes = Joi.object({
  [PaginationParam.PAGE_SIZE]: pageSizeConstraint,
  [PaginationParam.OFFSET]: offsetConstraint
})
