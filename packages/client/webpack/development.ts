import getOptimization from './optimization'

import { Mode } from './types'

const mode = Mode.DEVELOPMENT

const devtool = 'inline-source-map'

const resolve = {
  alias: {
    'react-dom': '@hot-loader/react-dom'
  }
}

const output = {
  filename: '[name].bundle.js'
}

const devServer = {
  port: 3000,
  historyApiFallback: true
}

const entry = ['react-hot-loader/patch', './client/src/index.tsx']

const optimization = getOptimization(mode)

export { mode, devtool, resolve, output, devServer, entry, optimization }
