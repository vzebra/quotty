import { Mode } from './types'

const prodOptimization = {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        name: 'vendors',
        chunks: 'all'
      }
    }
  }
}

const getOptimization = (mode: Mode) => ({
  nodeEnv: mode,
  ...(mode === Mode.PRODUCTION && prodOptimization)
})

export default getOptimization
