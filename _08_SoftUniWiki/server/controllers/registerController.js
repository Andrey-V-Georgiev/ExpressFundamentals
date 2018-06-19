const User = require('../../database/models/User')
const encryption = require('../encryption')

module.exports = (app) => {
  app.get('/register', (req, res) => {
    res.render('pages/register')
  })

  app.post('/register', (req, res) => {

    let newSalt = encryption.generateSalt()
    let newHashedPassword = encryption.generateHashedPassword(req.body.password, newSalt)

    if (req.body.password === req.body.repeatedPassword) {
      let newUser = {
        email: req.body.email,
        password: newHashedPassword,
        salt: newSalt,
        isAdmin: false,
      }

      User.create(newUser).then(() => {
        req.login()
        res.redirect('/home')
      }).catch((err) => {
        console.log(err)
        res.redirect('/register')
      })
    } else {
      res.redirect('/register')
    }
  })
}