import axios from 'axios'

/* eslint-disable @typescript-eslint/ban-ts-comment */

const quoteConfig = axios.create({
  // @ts-ignore
  baseURL: `${apiProtocol}://${apiHost}:${apiPort}/api/quotes`
})

export const getQuote = quoteConfig.get
const emailConfig = axios.create({
  baseURL: `${ProcessEnv.EMAIL_ENDPOINT}`
})

export const postEmail = emailConfig.post
