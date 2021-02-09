const merge = require('webpack-merge');
const path = require('path');

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    compress: false,
    contentBase: path.resolve(__dirname, '../dist'),
    historyApiFallback: true,
    open: true,
    port: 3000,
    progress: true,
    watchContentBase: true,
  },
});
