const express = require('express');
const webpack = require('webpack');

const app = express();
const webpackConfig = require('../webpack.production');
webpackConfig.entry.push('webpack-hot-middleware/client')

const compiler = webpack(webpackConfig);

app.use(require("webpack-dev-middleware")(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath,
  mode: "development"
}));

app.use(require("webpack-hot-middleware")(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}));

app.get("/", function (req, res) {
  res.sendFile(__dirname + '../dist/index.html');
});

app.listen(3000, () => console.log("App running at http://localhost:3000"))
