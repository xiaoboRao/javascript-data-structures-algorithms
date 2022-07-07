const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // js entry configuration
  entry: './src/index.js',

  // output configuration
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  // loader configuration
  module: {
    rules: [
      {
        test: /\.css$/, // match css file
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js?$/, // 匹配 js 或 jsx 文件
        exclude: /node_modules/, // 排除 node_modules 文件夹
        use: {
          loader: 'babel-loader',
          options: {
            // babel configuration
            babelrc: false,
            presets: [
              [require.resolve('@babel/preset-env'), {modules: false}]
            ],
            cacheDirectory: true
          }
        }
      }
    ]
  },

  // plugin configuration
  plugins: [
    new htmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: true
    })
  ],

  // local server configuration
  devServer: {
    contentBase: './dist',
    host: 'localhost',
    port: 8888
  }
}
