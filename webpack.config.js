var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({
  output: {comments: false},
  compress: {warnings: false}
});
var definePlugin = new webpack.DefinePlugin({
  'process.env': {NODE_ENV: '"production"'},
});

module.exports = {
  entry: './src/timeago.locales.js',
  output: {filename: './dist/timeago.locales.min.js'},
  plugins: [uglifyJsPlugin, definePlugin]
};