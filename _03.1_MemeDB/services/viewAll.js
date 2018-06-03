const fs = require('fs')
const viewAllFiller = require('./viewAllFiller')

let viewAll = async (req, res) => {
  let replacer = await viewAllFiller()
  fs.readFile('./views/viewAll.html', 'utf8', (err, data) => {
    if (err) {
      res.showError()
    } else {
      res.writeHead(200, {'content-type': 'text/html'})
      data = data.replace('<div id="replaceMe">{{replaceMe}}</div>', replacer)
      res.write(data)
      res.end()
    }
  })
}

module.exports = viewAll