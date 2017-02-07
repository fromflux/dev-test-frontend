const path = require('path')
const express = require('express')

const data = require('./data.js')

const port = (process.env.PORT || 8080)
const indexPath = path.join(__dirname, '/public/index.html')
const publicPath = express.static(path.join(__dirname, '/public'))

const app = express()

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('./webpack.config.js')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleware(compiler, {
    historyApiFallback: true,
    hot: true,
    inline: true,
    noInfo: true,
    publicPath: config.output.publicPath,
    contentBase: 'src'
  }))
}

app.use(publicPath)

app.get('/api/bikes', function(req, res) {
  res.json(data);
})

app.get('*', function (req, res) { res.sendFile(indexPath) })

app.listen(port)
console.log(`Listening at http://localhost:${port}`)