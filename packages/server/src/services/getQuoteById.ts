import { Op } from 'sequelize'
import Quote from '@models/quote'

export const getQuoteById = async (id: string) => {
  const quote = await Quote.findOne({
    where: {
      [Op.and]: {
        id,
        isDeleted: false
      }
    }
  })
  return quote
}
