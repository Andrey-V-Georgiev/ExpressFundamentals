const addMoviePost = require('../services/addMoviePost')
const renderView = require('../services/renderView')

function addMovie (req, res) {

  if (req.pathname === '/addMovie' && req.method === 'GET') {
    let fileAddress = './views/addMovie.html'
    renderView(req, res, fileAddress)

  } else if (req.pathname === '/addMovie' && req.method === 'POST') {
    addMoviePost (req, res)

  } else {
    return true
  }
}

module.exports = addMovie