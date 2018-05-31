const renderView = require('../services/renderView.js')
const getAllPosters = require('../services/getAllPosters')

function viewAll (req, res) {
  if (req.pathname === '/viewAllMovies' && req.method === 'GET') {
    let fileAddress = './views/viewAll.html'
    let additionalHtml = getAllPosters()
    renderView(req, res, fileAddress, additionalHtml)
  }
  else {
    return true
  }
}

module.exports = viewAll