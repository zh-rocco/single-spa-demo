const webpack = require('webpack');
const APP_NAME = require('./package.json').name;
const PORT = require('./package.json').devPort;

const NODE_ENV = process.env.NODE_ENV || 'development';

log('APP_NAME: ', APP_NAME);
log('NODE_ENV: ', NODE_ENV);

module.exports = {
  publicPath: '/',

  productionSourceMap: false,

  configureWebpack: {
    entry: './src/entry.js',

    externals: {
      // vue: 'Vue',
      // vuex: 'Vuex',
      // 'vue-router': 'VueRouter',
    },

    output: {
      libraryExport: 'default',
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env.VUE_APP_NAME': JSON.stringify(APP_NAME),
      }),
    ],
  },

  devServer: {
    port: PORT,
    // historyApiFallback: true,
  },
};

function log(label, content) {
  console.log('\x1b[1m%s\x1b[31m%s\x1b[0m', label, content);
}
