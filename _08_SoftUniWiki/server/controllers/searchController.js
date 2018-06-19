const authCheck = require('../authStatus')

module.exports = (app) => {
  //todo auth
  app.get('/search',  (req, res) => {

    res.render('pages/search-results', req)
  })
}