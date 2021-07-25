import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { CleanWebpackPlugin } from 'clean-webpack-plugin'
import CompressionPlugin from 'compression-webpack-plugin'

import webpack from 'webpack'

import { Mode } from './types'

enum ProcessEnv {
  API_PROTOCOL = 'apiProtocol',
  API_HOST = 'apiHost',
  API_PORT = 'apiPort',
  EMAIL_ENDPOINT = 'emailEndpoint'
}

const HtmlPlugin = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
  filename: 'index.html'
})

const { DefinePlugin } = webpack

const Define = new DefinePlugin({
  apiProtocol: JSON.stringify('http'),
  apiHost: JSON.stringify('localhost'),
  apiPort: JSON.stringify('9000'),
  'ProcessEnv.EMAIL_ENDPOINT': JSON.stringify('https://ozlcp024yj.execute-api.us-east-2.amazonaws.com/prod')
})


const CleanPlugin = new CleanWebpackPlugin()

const CompressPlugin = new CompressionPlugin({
  filename: '[path][base].br',
  algorithm: 'brotliCompress',
  test: /\.(js|css|html|svg)$/,
  threshold: 10240,
  minRatio: 0.8,
  deleteOriginalAssets: false
})


const getPlugins = (mode: Mode) => [
  HtmlPlugin,
  CleanPlugin,
  Define,
  ...(mode === Mode.PRODUCTION ? [CompressPlugin] : [])
]

export default getPlugins
