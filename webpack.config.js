var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  output: {comments: false},
  compress: {warnings: false}
});

module.exports = {
  entry: './src/timeago.locales.js',
  output: {filename: './dist/timeago.locales.min.js'},
  plugins: [uglifyJsPlugin]
};