const webpack = require('webpack');
const path = require('path');

module.exports  = {
    entry: {
        app: './app.js'
    },
    devtool: 'source-map',
    context: `${__dirname}/src`,
    
    resolve: {
        extensions: ['.less','.js', '.jsx', '.json']
    },
    module: {
    rules: [
      { test: /\.jsx?$/, use: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json?$/, use: ['json-loader'], exclude: /node_modules/ },
      { test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'] },
    ]
  }, 
    output: {
    filename: '[name].bundle.js',
    path: `${__dirname}/dist`,
    publicPath: '/assets'
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 4200
  }
}