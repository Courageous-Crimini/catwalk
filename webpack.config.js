const path = require('path');
require('compression-webpack-plugin');

const SRC_DIR = '/client';
const DIST_DIR = './public';

module.exports = {
  entry: path.join(__dirname, `${SRC_DIR}/src/index.jsx`),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, SRC_DIR, DIST_DIR),
  },
  devtool: false,
  watch: true,
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              ['@babel/plugin-transform-runtime',
                {
                  regenerator: true,
                },
                // new CompressionPlugin(),
                'compression-webpack-plugin',
              ],
            ],
          },
        },
      },
    ],
  },
};
