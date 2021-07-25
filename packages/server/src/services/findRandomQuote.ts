import { Sequelize, Op, Order } from 'sequelize'

import { RandomQuoteParams } from '@interfaces/randomQuoteParams'

import Quote from '@models/quote'

export const findRandomQuote = async (randomQuoteParams: RandomQuoteParams) => {
  const order = [Sequelize.literal('random()')]
  const cond = Object.keys(randomQuoteParams).reduce((acc, key) => {
    const [field, op] = key.split('_')
    acc.push({
      [field]: {
        [Op[op as keyof typeof Op]]:
          randomQuoteParams[key as keyof typeof randomQuoteParams]
      }
    })
    return acc
  }, [])
  const where = {
    [Op.and]: cond
  }

  const randomQuote = await Quote.findOne({
    where,
    order
  })

  return randomQuote
}
