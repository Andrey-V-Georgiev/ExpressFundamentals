const http = require('http')
const url = require('url')
const port = 4000
const handlers = require('./handlers')

http.createServer(framework).listen(port)

function framework (req, res) {
  req.pathname = url.parse(req.url).pathname

  for (let handler of handlers) {

    if (handler (req, res) !== true) {

      break
    }
  }
}

console.log(`Server is listening on port ${port}`)