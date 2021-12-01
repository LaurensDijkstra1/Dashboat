const path = require('path')

//exporting an object from this file, properties represent the configurations of webpack, setting an absolute path in the output
module.exports = {
    rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: ['source-map-loader'],
        },
      ],
    mode: 'development',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}