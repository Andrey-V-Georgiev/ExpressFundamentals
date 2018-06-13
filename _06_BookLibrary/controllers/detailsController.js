const Book = require('../models/Book')

module.exports = {
  detailsController: (app) => {
    app.get('/details/:id', (req, res) => {
      let id = req.params.id
      Book.findById(id).then((book) => {
        res.render('details.hbs', book)
      })
    })
  }
}