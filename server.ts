var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

// @ts-ignore
const history = require('connect-history-api-fallback')
const app = express()
// @ts-ignore
const staticFileMiddleware = express.static(path.join(__dirname + '/dist'))

/* var app = express()
app.use(serveStatic(path.join(__dirname, 'dist'))) */

app.use(staticFileMiddleware)
// @ts-ignore
app.use(history({
    disableDotRule: true,
    verbose: true
}))
app.use(staticFileMiddleware)
app.get('/', function (req, res) {
    // @ts-ignore
    res.render(path.join(__dirname + '/dist/index.html'))
})

var port = process.env.PORT || 8080
app.listen(port)
console.log(`server started ${port}`)
