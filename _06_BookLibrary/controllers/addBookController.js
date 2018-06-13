const Book = require('../models/Book')

module.exports = {
  addBookController: (app) => {
    app.get('/addBook', (req, res) => {
      res.render('addBook.hbs')
    })

    app.post('/addBook', (req, res) => {
      let book = req.body
      if (!book.bookTitle || !book.bookYear || !book.bookPoster || !book.bookAuthor) {
        res.redirect('/addBook')
      } else {
        Book.create(book, (err, book) => {
          if (err) return console.log(err)
          res.redirect('/addBook')
        })
      }
    })
  }
}