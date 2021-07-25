import { Request, Response } from 'express'

export const respondPing = (_req: Request, res: Response) => {
  const pong = {
    statusCode: 200,
    message: 'OK',
    time: new Date().toISOString()
  }
  res.send(JSON.stringify(pong))
}
