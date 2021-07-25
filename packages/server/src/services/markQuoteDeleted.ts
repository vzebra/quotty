import Quote from '@models/quote'

export const markQuoteDeleted = async (id: string): Promise<boolean> => {
  const [isDeleted] = await Quote.update(
    { isDeleted: true },
    {
      where: {
        id
      }
    }
  )
  return !!isDeleted
}
