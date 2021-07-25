import path from 'path'

import tsconfig from '../../../tsconfig.base.json'

enum Extension {
  TS = '.ts',
  TSX = '.tsx',
  JS = '.js',
  JSX = '.jsx'
}

interface Tsconfig {
  compilerOptions: {
    paths: Record<string, string[]>
  }
}

const {
  compilerOptions: { paths }
} = tsconfig as Tsconfig

const removeSlashAsterisk = (s: string) => s.replace('/*', '')

const alias = Object.keys(paths).reduce((acc: Record<string, string>, key) => {
  const webpackAlias = removeSlashAsterisk(key)
  const webpackPath = removeSlashAsterisk(paths[key][0])
  acc[webpackAlias] = path.resolve(__dirname, '../../../', webpackPath)
  return acc
}, {})

const extensions = Object.values(Extension)

const fallback = {
  os: require.resolve("os-browserify/browser"),
  path: require.resolve("path-browserify"),
  fs: false
}

const resolve = {
  extensions,
  alias,
  fallback
}

export default resolve
