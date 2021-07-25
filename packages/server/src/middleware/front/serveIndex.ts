import { Request, Response } from 'express'

import path from 'path'

export const serveIndex = (_req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname, '../../../../dist', 'index.html'))
}
