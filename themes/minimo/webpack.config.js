const path = require('path')
const autoprefixer = require('autoprefixer')
const AssetsWebpackPlugin = require('assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

const assetsManifest = new AssetsWebpackPlugin({
  filename: 'assets.json',
  path: path.join(__dirname, 'data'),
  fullPath: false,
  processOutput: assets => {
    Object.keys(assets).forEach(bundle => {
      Object.keys(assets[bundle]).forEach(type => {
        let filename = assets[bundle][type]
        assets[bundle][type] = filename.slice(filename.indexOf(bundle))
      })
    })
    return JSON.stringify(assets, null, 2)
  }
})

const extractCSS = new MiniCSSExtractPlugin({
  filename: '../css/[name].[contenthash:8].css'
})

const cleanBuild = new CleanWebpackPlugin([
  'static/assets/css/*',
  'static/assets/js/*'
])

const node_env = process.env.NODE_ENV

const config = {
  mode: node_env === 'production' ? 'production' : 'development',
  entry: [
    path.join(__dirname, 'src/scripts', 'main.ts'),
    path.join(__dirname, 'src/stylesheets', 'style.scss')
  ],
  output: {
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].js',
    path: path.join(__dirname, 'static', 'assets/js')
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          // {
          //   loader: 'file-loader',
          //   options: {
          //     name: '[name].css',
          //     // outputPath: 'assets/css/'
          //   }
          // },
          // {
          //   loader: 'extract-loader',
          //   options: {
          //     publicPath: '',
          //   },
          // },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [cleanBuild, extractCSS, assetsManifest]
}

module.exports = config
