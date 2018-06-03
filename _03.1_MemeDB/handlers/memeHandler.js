const renderDetailsView = require('../services/renderDetailsView')
const viewAll = require('../services/viewAll')
const addMeme = require('../services/addMeme')
const viewAddMeme = require('../services/viewAddMeme')

let memeHandler = (req, res) => {
  if (req.pathname === '/viewAllMemes' && req.method === 'GET') {
    viewAll(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'GET') {
    viewAddMeme(req, res)
  } else if (req.pathname === '/addMeme' && req.method === 'POST') {
    addMeme(req, res)
  } else if (req.pathname.startsWith('/getDetails') && req.method === 'GET') {
    renderDetailsView(req, res)
  } else {
    return true
  }
}

module.exports = memeHandler
