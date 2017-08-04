var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
//create an index.html file for us and put it in dist and have index.bundle

module.exports = {
  entry: './app/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: "/"
  },

  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
    ]
  },

  devServer: {
    historyApiFallback: true,
    proxy: {
  "/api": "http://localhost:3000"
}
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    })
  ]
};
