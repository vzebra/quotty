import express, { json } from 'express'
import morgan from 'morgan'
import cors from 'cors'

import path from 'path'

import { pingRouter } from '@routes/ping'
import { quoteRouter } from '@routes/quotes'

const app = express()
const PORT = Number(process.env.PORT) || 9000

app.use(json())
app.use(cors())
app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, '../dist')))

app.use('/ping', pingRouter)

app.use('/api/quotes', quoteRouter)

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
