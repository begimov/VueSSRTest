const merge = require('webpack-merge')
const base = require('./webpack.base.config')

module.exports = merge(base, {
    entry: {
        app: './src/main.server.js'
    }
})