const authStatus = require('../authStatus')

module.exports = (app) => {
  app.get('/home', authStatus, (req, res) => {
    res.render('pages/index', req)
  })
}