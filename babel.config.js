module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript',
    '@babel/preset-react'
  ],
  plugins: ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties']
}
