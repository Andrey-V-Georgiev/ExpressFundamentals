const renderView = require('../services/renderView.js')

function homeHandler (req, res) {
  if (req.pathname === '/' && req.method === 'GET') {
    let fileAddress = './views/home.html'
    renderView(req, res, fileAddress)
  } else {
    return true
  }
}

module.exports = homeHandler