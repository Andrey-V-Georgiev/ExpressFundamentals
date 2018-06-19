const mongoose = require('mongoose')

require('./models/Edit')
require('./models/Article')
require('./models/User')

module.exports = mongoose.connect('mongodb://localhost:27017/examJune',
  (err) => {
    if (err) return console.log(err)
    console.log('MongoDB is running...')
  }
)