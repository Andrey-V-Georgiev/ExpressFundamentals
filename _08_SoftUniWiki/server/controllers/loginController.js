const passport = require('../passport')

module.exports = (app) => {
  app.get('/login', (req, res) => {
    res.render('pages/login')
  })

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }))
}

