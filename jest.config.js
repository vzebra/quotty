const tsConfig = require('./tsconfig.json')

const {
  compilerOptions: { paths }
} = tsConfig

const moduleNameMapper = Object.keys(paths).reduce((acc, path) => {
  const alias = path.replace('/*', '/(.*)')
  const location = paths[path][0].replace('/*', '')
  const value = `<rootDir>/src/${location}/$1`
  acc[alias] = value
  return acc
}, {})

module.exports = {
  globals: {
    'ts-jest': {
      tsConfigFile: 'tsconfig.json',
      enableTsDiagnostics: true
    }
  },
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper
}
