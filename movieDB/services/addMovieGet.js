const fs = require('fs')

function addMovieGet (req, res, conditionTemplate) {
  let readStream = fs.createReadStream('./views/addMovie.html')
  let body = []

  readStream.on('data', (chunk) => {body.push(chunk)})

  readStream.on('end', () => {
    res.writeHead(200, {'content-type': 'text/html'})
    body = Buffer.concat(body).toString()
    //if (conditionTemplate) {
      body = body.replace('{{replaceMe}}', conditionTemplate)
    //}
    res.write(body)
    res.end()
  })

  readStream.on('error', (err) => {
    console.log(err.message)
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end(err.message)
  })
}

module.exports = addMovieGet