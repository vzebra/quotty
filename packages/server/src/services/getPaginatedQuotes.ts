import { Order } from 'sequelize'

import {
  PaginationParams,
  PaginationParam,
  PageSize
} from '@interfaces/paginationParams'

import Quote from '@models/quote'

const defaultPageSize = PageSize.SMALL
const defaultOffset = 0

export const getPaginatedQuotes = async (
  paginationParams: PaginationParams
) => {
  const {
    [PaginationParam.PAGE_SIZE]: limit = defaultPageSize,
    [PaginationParam.OFFSET]: offset = defaultOffset
  } = paginationParams
  const order = [['id', 'ASC']] as Order

  const quotesPage = await Quote.findAll({
    order,
    limit,
    offset
  })

  return quotesPage
}
