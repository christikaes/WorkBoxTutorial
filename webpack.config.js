const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './bundle.[hash].js'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader' }
          ],
        })
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/src/public/index.html",
      inject: 'body'
    }),
    new ExtractTextPlugin("./styles.[hash].css"),
    new CopyWebpackPlugin([
      { from: __dirname + "/src/public/", to: "./" }
    ]),
    new WorkboxPlugin.InjectManifest({
      swSrc: __dirname + '/src/public/sw.js',
    })
  ],
  devServer: {
    contentBase: './src/public',
    port: 8080
  }
}