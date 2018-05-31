const qs = require('querystring')
const db = require('../config/dataBase')
const renderView = require('../services/renderView')

function addMoviePost (req, res) {
  let body = []

  req.on('data', (chunk) => {
    body.push(chunk)
  })

  req.on('end', () => {
    body = Buffer.concat(body).toString()
    let movieData = qs.parse(body)
    let title = movieData['movieTitle']
    let year = movieData['movieYear']
    let poster = encodeURIComponent(movieData['moviePoster'])
    let description = movieData['movieDescription']

    let newMovie = {
      movieTitle: title,
      movieYear: year,
      moviePoster: poster,
      movieDescription: description
    }

    let additionalHtml = ''
    if ((title.length === 0 || poster.length === 0) || (title === null || poster === null)) {
      additionalHtml = '<div id="errBox"><h2 id="errMsg">Please fill all fields</h2></div>'
    } else {
      db.push(newMovie)
      additionalHtml = '<div id="succssesBox"><h2 id="succssesMsg">Movie Added</h2></div>'
    }
    let fileAddress = './views/addMovie.html'
    renderView(req, res, fileAddress, additionalHtml)
  })

  req.on('error', (err) => {
    res.writeHead(404, {'content-type': 'text/plain'})
    res.end(err.message)
  })
}

module.exports = addMoviePost