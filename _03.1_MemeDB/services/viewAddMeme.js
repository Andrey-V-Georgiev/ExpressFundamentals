const fs = require('fs')

let viewAddMeme = (req, res) => {
  fs.readFile('./views/addMeme.html', 'utf8', (err, data) => {
    if (err) {
      res.showError()
    } else {
      res.writeHead(200, {'content-type': 'text/html'})
      res.write(data)
      res.end()
    }
  })
}

module.exports = viewAddMeme