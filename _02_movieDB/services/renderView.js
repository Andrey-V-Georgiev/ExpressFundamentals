const fs = require('fs')

function renderView (req, res, fileAddress, additionalHtml) {
  let readStream = fs.createReadStream(fileAddress)
  let body = []

  readStream.on('data', (chunk) => {
    body.push(chunk)
  })

  readStream.on('end', () => {
    res.writeHead(200, {'content-type': getContentType(fileAddress)})
    if (additionalHtml) {
      body = Buffer.concat(body).toString()
      body = body.replace('{{replaceMe}}', additionalHtml)
      res.write(body)
      res.end()
    } else {
      body = Buffer.concat(body)
      res.write(body)
      res.end()
    }
  })

  readStream.on('error', (err) => {
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end(err.message)
  })
}

function getContentType (fileAddress) {
  let extension = fileAddress.split('.').pop()
  let contentTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'jpeg': 'image/jpeg',
    'ico': 'image/x-icon'
  }
  return contentTypes[extension]
}

module.exports = renderView