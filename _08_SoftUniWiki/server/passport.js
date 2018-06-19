const passport = require('passport')
const LocalPassport = require('passport-local').Strategy
const encryption = require('./encryption')
const User = require('../database/models/User')

passport.use(new LocalPassport({usernameField: 'email'},(email, password, done) => {

  User.findOne({email: email}, (err, user) => {

    const hashedPass = encryption.generateHashedPassword(password, user.salt)
    if (err) { return done(err) }
    if (!user) {
      return done(null, false, {message: 'Incorrect username.'})
    }
    if (user.password !== hashedPass) {
      return done(null, false, {message: 'Incorrect password.'})
    }
    return done(null, user)
  })
}))

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user)
  })
})

module.exports = passport