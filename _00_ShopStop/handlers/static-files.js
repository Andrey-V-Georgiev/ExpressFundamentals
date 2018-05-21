const url = require('url')
const path = require('path')
const fs = require('fs')

function getContentType (urlpathname) {
  let contentTypes = {
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.ico': 'image/x-icon'
  }

  let type = '';
  for (let type in contentTypes) {
    if (urlpathname.endsWith(type)) {
      type = contentTypes[type]
    }
  }
  console.log(type)
  return type
}

module.exports = (req, res) => {
  req.pathname = req.pathname || url.parse(req.url).pathname

  if (req.pathname.startsWith('/content/') && req.method === 'GET') {

    let filePath = path.normalize(path.join(__dirname, `..${req.pathname}`))

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404, {
          'Content-Type': 'text/plain'
        })
        res.write('Resource  not found')
        res.end()
        return
      }

      res.writeHead(200, {
        'Content-Type': getContentType(req.pathname)
      })

      res.write(data)
      res.end()
    })
  } else {
    return true
  }
}
