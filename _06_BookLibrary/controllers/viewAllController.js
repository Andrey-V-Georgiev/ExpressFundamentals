const Book = require('../models/Book')

module.exports = {
  viewAllController: (app) => {

    app.get('/viewAllBooks', (req, res) => {
      Book.find({})
        .sort('-bookYear')
        .then((books) => {
          res.render('viewAll.hbs', {books})
        })

    })
  }
}