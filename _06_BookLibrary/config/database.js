const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost:27017/booklibrary',
  (err) => {
    if (err) return console.log(err)
    console.log('MongoDB is running...')
  }
)