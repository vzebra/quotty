import { Sequelize } from 'sequelize'

const protocol = 'postgres'
const login = 'quote'
const host = '216.189.151.18'
const port = 5432
const password = 'quote'
const dbName = 'quotty'

const uri = `${protocol}://${login}:${password}@${host}:${port}/${dbName}`

export default new Sequelize(uri)
