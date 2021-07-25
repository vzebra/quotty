import { Router } from 'express'

import { respondPing } from '@middleware/ping'

export const pingRouter = Router()

pingRouter.get('/', respondPing)
