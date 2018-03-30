const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')

module.exports = merge(base, {
    target: 'node',
    entry: {
        app: './src/main.server.js'
    },
    output: {
        libraryTarget: 'commonjs2'
    },
    externals: nodeExternals()
})