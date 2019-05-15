const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const outputPath = path.join(__dirname, 'public');

module.exports = {
  entry: './src/app.js',
  //entry: './src/playground/context.js',
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(le|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ],
        //exclude: /fontawesome-free-5.8.2-web/,
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: outputPath,
    compress: true,
    port: 8000,
    historyApiFallback: true,
  },
  plugins: [ 
    new MiniCssExtractPlugin()
  ]
};