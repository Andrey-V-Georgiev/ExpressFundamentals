const homeHandler = require('./homeHandler')
const staticHandler = require('./staticHandler')
const viewAllHandler = require('./viewAllHandler')
const addMovieHandler = require('./addMovieHandler')
const detailsHandler = require('./detailsHandler')

module.exports = [
  staticHandler,
  homeHandler,
  viewAllHandler,
  addMovieHandler,
  detailsHandler
]