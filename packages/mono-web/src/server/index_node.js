require('@babel/register')({
  presets: ['@babel/preset-react', '@babel/preset-env'],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    'babel-plugin-dynamic-import-node',
    '@babel/plugin-transform-runtime',
    [
      'babel-plugin-css-modules-transform',
      {
        extensions: ['.css'],
        generateScopedName: '../../generateScopedNames.js'
      }
    ],
  ],
  extensions: ['.js', '.jsx'],
  ignore: [
    (filepath) => filepath.indexOf('mono-components') === -1 &&  filepath.indexOf('node_modules') > -1
  ]
})
require('./index')
