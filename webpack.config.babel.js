import path from 'path'
import webpack from 'webpack'

export default {
  context: path.join(__dirname, './client'),

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  entry: [
    'webpack-hot-middleware/client',
    './index.jsx'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
