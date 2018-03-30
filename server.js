const fs = require('fs')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')

app = express()

const bundle = require('./dist/vue-ssr-server-bundle.json')

const renderer = createBundleRenderer(bundle, {
    basedir: './dist',
    template: fs.readFileSync('./index.html', 'utf-8'),
    clientManifest: require('./dist/vue-ssr-client-manifest.json')
})

app.use('/dist', express.static('./dist'))

app.get('*', (req, res) => {
    renderer.renderToString({
        url: req.url
    }, (err, html) => {
        res.send(html)
    })
})

app.listen(8080)