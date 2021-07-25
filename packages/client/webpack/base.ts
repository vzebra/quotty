import path from 'path'

import rules from './rules'

import resolve from './resolve'

import getPlugins from './plugins'

import { Mode } from './types'

const mode = Mode.NONE

const context = path.resolve(__dirname, '../..')

const entry = {
  app: path.resolve(context, './client/src/', 'index.tsx')
}

const output = {
  path: path.resolve(context, 'client/dist/')
}

const plugins = getPlugins(mode)

const target = 'web'

const baseConfig = {
  context,
  entry,
  output,
  resolve,
  target,
  plugins
}
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-ignore
baseConfig.module = { rules }

export default baseConfig
