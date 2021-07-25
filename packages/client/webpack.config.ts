import { merge } from 'webpack-merge'
import { base, development, production } from './webpack'

import { Mode, Env, WebpackArgv } from './webpack/types'




const configMap: Partial<Record<Mode, any>> = {
  [Mode.DEVELOPMENT]: development,
  [Mode.PRODUCTION]: production
}

const webpackConfig = (_env: Env, { mode }: WebpackArgv) =>
  merge(base, configMap[mode])

export default webpackConfig
