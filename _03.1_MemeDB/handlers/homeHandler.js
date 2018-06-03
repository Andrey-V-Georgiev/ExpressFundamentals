const fs = require('fs')
const filePath = './views/home.html'

let showHomeView = (req, res) => {
  if (req.pathname === '/' && req.method === 'GET') {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.showError(err)
      } else {
        res.writeHead(200, {
          'Content-Type': 'text/html'
        })
        res.write(data)
        res.end()
      }
    })
  } else {
    return true
  }
}

module.exports = showHomeView
