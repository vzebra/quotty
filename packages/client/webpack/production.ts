import getOptimization from './optimization'
import getPlugins from './plugins'

import { Mode } from './types'

const mode = Mode.PRODUCTION

const output = {
  filename: '[name][contenthash].js'
}

const optimization = getOptimization(mode)

const plugins = getPlugins(mode)

export { mode, output, optimization, plugins }
