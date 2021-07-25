import Joi from 'joi'
import { uuidChecker } from '@common/helpers/string'
import { QueryParam, PageSize } from '@common/interfaces'

export const idConstraint = Joi.string().custom(uuidChecker)
export const authorConstraint = Joi.string().min(2)
export const textConstraint = Joi.string().min(2)
export const tagsConstraint = Joi.array().items(Joi.string())
export const createdByConstraint = Joi.string()
export const createdAtConstraint = Joi.date().max('now')
export const updatedAtConstraint = Joi.date().max('now')
export const isDeletedConstraint = Joi.boolean()
export const randomQuoteParamsConstraint = {
  [QueryParam.TAGS_CONTAINS]: Joi.array().items(Joi.string().min(1)),
  [QueryParam.AUTHOR_EQ]: Joi.string().min(2),
  [QueryParam.AUTHOR_SUBSTRING]: Joi.string().min(2),
  [QueryParam.TEXT_SUBSTRING]: Joi.string().min(1)
}
export const pageSizeConstraint = Joi.number().allow(...Object.values(PageSize))
export const offsetConstraint = Joi.number().min(0)
