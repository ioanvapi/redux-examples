import path from 'path';
import webpack from 'webpack';


export default {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    'webpack-hot-middleware/client',
    path.join(__dirname, '/client/index.js'),
  ],

  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/'
  },

  module : {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: [
          path.join(__dirname, 'client'),
          path.join(__dirname, 'server')
        ],
        loaders: ['react-hot-loader', 'babel-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js']
  },

  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}