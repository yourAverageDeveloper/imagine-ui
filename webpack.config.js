const { join } = require('path');

module.exports = {
  context: join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'Imagine'
  }
}