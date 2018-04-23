import webpack from "webpack";
import path from "path";

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './js/app.js'
  },

  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /(node_modules)/,
        query: {cacheDirectory: true}
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch'
    })
  ],

  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },
  externals:  [/^vendor\/.+\.js$/]
};
