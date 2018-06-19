module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    req.isAuthenticated = true
  }
  next()
}