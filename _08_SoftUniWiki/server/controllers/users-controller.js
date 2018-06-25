const encryption = require('../utilities/encryption')
const User = require('mongoose').model('User')

module.exports = {
  getRegister: (req, res) => {
    res.render('pages/register')
  },

  postRegister: (req, res) => {
    let reqUser = req.body
    if (reqUser.password !== reqUser.repeatedPassword) {
      res.redirect('/register')
      return
    }

    let salt = encryption.generateSalt()
    let hashedPassword = encryption.generateHashedPassword(salt, reqUser.password)

    User.create({
      username: reqUser.username,
      firstName: reqUser.firstName,
      lastName: reqUser.lastName,
      salt: salt,
      hashedPass: hashedPassword
    }).then(user => {
      req.logIn(user, (err, user) => {
        if (err) {
          res.locals.globalError = err
          res.render('pages/register', user)
        }

        res.redirect('/home')
      })
    }).catch(err => {
      console.log(err.message)
      res.redirect('/login')
    })
  },

  getLogin: (req, res) => {
    res.render('pages/login')
  },

  postLogin: (req, res) => {
    let reqUser = req.body

    User
      .findOne({ username: reqUser.username }).then(user => {
        if (!user) {
          res.locals.globalError = 'Invalid user data'
          res.render('pages/register')
          return
        }

        if (!user.authenticate(reqUser.password)) {
          res.locals.globalError = 'Invalid user data'
          res.render('pages/login')
          return
        }

        req.logIn(user, (err, user) => {
          if (err) {
            res.locals.globalError = err
            res.render('pages/login')
          }

          res.redirect('/home')
        })
      })
  },
  postLogout: (req, res) => {
    req.logout()
    res.redirect('/home')
  }
}
