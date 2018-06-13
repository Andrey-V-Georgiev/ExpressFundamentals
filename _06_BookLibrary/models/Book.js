const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  bookTitle: {type: String, require: true},
  bookYear: {type: Date, require: true},
  bookPoster: {type: String, require: true},
  bookAuthor: {type: String, require: true}
})

mongoose.model('Book', bookSchema)

module.exports = mongoose.model('Book')