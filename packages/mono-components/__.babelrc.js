module.exports = {
  presets: [
    "@babel/preset-react",
    ["@babel/preset-env", { modules: false }],
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      'babel-plugin-css-modules-transform',
      {
        extensions: ['.css'],
        generateScopedName: '../../generateScopedNames.js'
      }
    ],
    // '@babel/plugin-transform-runtime'
  ]
}
