const fs = require('fs')
const shortid = require('shortid')

let downloadHandler = (req, res) => {
  if (req.pathname.startsWith('/download/') && req.method === 'POST') {
    let filePath = `.${req.pathname.split('/download')[1]}`
    let downloadName = shortid.generate()
    let readerStream = fs.createReadStream(filePath)
    let writerStream = fs.createWriteStream(`../../../../../Users/ANDREY/Downloads/${downloadName}.jpg`)
    readerStream.pipe(writerStream)
    res.writeHead(302, {location: '/viewAllMemes'})
    res.end()

  } else {
    return true
  }
}

module.exports = downloadHandler