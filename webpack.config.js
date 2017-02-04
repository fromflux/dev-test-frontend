var path = require("path");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),

    filename: 'bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}