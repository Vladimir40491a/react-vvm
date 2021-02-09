const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../src'),
  output: {
    path: path.resolve(__dirname, '../dist/'),
    publicPath: "/dist/",
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [ "@babel/preset-env", "@babel/preset-react" ],
        },
        exclude: /(node_modules)/,
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ],
      },
    ]
  },
  resolve: {
    extensions: [ '.js', '.jsx' ],
    modules: [ 'node_modules', ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
      hash: true,
    }),
  ]
};
