const renderView = require('../services/renderView.js')

function staticHandler (req, res) {

   if (req.pathname.startsWith('/public/') || req.pathname.startsWith('/favicon')) {
    let fileAddress = ''
    switch (req.pathname) {
      case '/public/css/main.css':
        fileAddress = './public/css/main.css'
        renderView(req, res, fileAddress)
        break
      case '/public/images/nodeLogo.png':
        fileAddress = './public/images/nodeLogo.png'
        renderView(req, res, fileAddress)
        break
      case '/favicon.ico':
        fileAddress = './public/images/favicon.ico'
        renderView(req, res, fileAddress)
        break
    }
  } else {
    return true
  }

}

module.exports = staticHandler
