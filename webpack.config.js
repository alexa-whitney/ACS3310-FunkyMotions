/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

module.exports = {
  entry: './src/funkyMotions.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
                library: 'FunkyMotions',
                libraryTarget: 'var',
                globalObject: 'this',
  },
};