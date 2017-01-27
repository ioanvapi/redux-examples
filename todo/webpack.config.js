var Webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './src/js/index.js',
  ],

  output: {
    path: './',
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets:['react', 'es2015', 'stage-0']
        }
      },

      {
        test: /\.css$/,
        loader: 'style!css'
      }
    ]
  },

  plugins: [
    new Webpack.HotModuleReplacementPlugin()
  ]
}
