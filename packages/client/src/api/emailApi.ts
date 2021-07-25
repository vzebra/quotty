import { postEmail } from './config'

export const emailQuote = (emailData: any) => postEmail('', emailData)
