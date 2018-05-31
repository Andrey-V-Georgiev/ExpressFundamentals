const renderView = require('../services/renderView')
const db = require('../config/dataBase')

function showDetails (req, res) {
  if (req.pathname.startsWith('/movies/details/') && req.method === 'GET') {
    let index = Number(req.pathname.split('/').pop())
    let movie = db[index]
    let title = movie['movieTitle']
    let year = movie['movieYear']
    let poster = decodeURIComponent(movie['moviePoster'])
    let description = movie['movieDescription']

    let additionalHtml = `<div class="content">
    <img src="${poster}" alt=""/>
    <h3>Title  ${title}</h3>
    <h3>Year ${year}</h3>
    <p> ${description}</p>
    </div>`

    let fileAddress = './views/details.html'
    renderView(req, res, fileAddress, additionalHtml)
  } else {
    return true
  }
}

module.exports = showDetails