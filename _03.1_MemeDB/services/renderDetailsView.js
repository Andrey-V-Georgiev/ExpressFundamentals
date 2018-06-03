const getDetailsFiller = require('./getDetailsFiller')
const url = require('url')
const db = require('../config/dataBase')
const fs = require('fs')

let renderDetailsView = async (req, res) => {
  let memeId = url.parse(req.url).query.split('=')[1]
  let database = await db.load()
  let targetedMeme = database.filter(meme => meme.id === memeId)[0]

  let replacer = await getDetailsFiller(targetedMeme)

  fs.readFile('./views/details.html', 'utf8', (err, data) => {
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

module.exports = renderDetailsView