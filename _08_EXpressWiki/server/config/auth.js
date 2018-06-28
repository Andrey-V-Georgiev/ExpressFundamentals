module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect('/login')
    }
  },
  isAdmin: (req) => {
    return req.isAuthenticated() && req.user.roles.indexOf('Admin') > -1
  },

  isInRole: (role) => {
    return (req, res, next) => {
      if (req.isAuthenticated() && req.user.roles.indexOf(role) > -1) {
        next()
      } else {
        res.redirect('/login')
      }
    }
  }
}
