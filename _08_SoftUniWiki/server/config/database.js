const mongoose = require('mongoose')
const User = require('../data/User')
const Article = require('../data/Article')

module.exports = (settings) => {
  mongoose.connect(settings.db)
  let db = mongoose.connection

  db.once('open', err => {
    if (err) {
      throw err
    }
    console.log('MongoDB ready!')
    User.seedAdminUser()
    Article.seedDefaultArticles()
  })

  db.on('error', err => console.log(`Database error: ${err}`))
}
