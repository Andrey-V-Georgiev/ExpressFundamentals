const Book = require('../models/Book')

module.exports = {
  homeController: (app) => {
    app.get('/', (req, res) => {
      Book.find({}).then((books) => {
        let bookCount = books.length
        res.render('index.hbs', {numBooks: bookCount})
      })
    })
  }
}