const http = require('http')
const url = require('url')
const handlers = require('./handlers/handlerBlender')
const db = require('./config/dataBase')
const port = 2323

db.load().then(() => {

  let framework = (req, res) => {

    for (let handler of handlers) {
      req.pathname = url.parse(req.url).pathname
      let task = handler(req, res)
      if (task !== true) {
        break
      }
    }
    res.showError = () => {
      res.writeHead(404, {'content-type': 'text/html'})
      res.end('<div>Error!</div>')
    }
  }

  http.createServer(framework).listen(port)
  console.log('Server listening on port: ' + port)

}).catch(() => {
  console.log('Failed to load DB')
})
