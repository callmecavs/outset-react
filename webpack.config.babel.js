import path from 'path'
import webpack from 'webpack'

export default {
  context: path.join(__dirname, './client'),

  entry: './index.jsx',

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './build')
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.scss']
  },

  module: {
    loaders: [
      { test: /\.jsx$/, loaders: ['react-hot', 'babel-loader'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] }
    ]
  }
}
