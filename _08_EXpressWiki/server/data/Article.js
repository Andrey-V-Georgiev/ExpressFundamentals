const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Edit = require('./Edit')
const defultArticles = require('./defaultArticles')

const articleSchema = new Schema({
  title: {type: mongoose.SchemaTypes.String, required: true},
  lockedStatus : {type: mongoose.SchemaTypes.Boolean, required: true, default: false},
  edits: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Edit'}
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article

module.exports.seedDefaultArticles = () => {
  Article.find({}).then(articles => {
    if (articles.length > 0) return

    for (let dummy of defultArticles) {
      Article.create({title: dummy.title, edits: []}, (err, article) => {
        if (err) return console.log(err.message)
        let editObject = {
          author: 'Admin',
          imageUrl: dummy.imageUrl,
          content: dummy.content,
          articleId: article._id
        }
        Edit.create(editObject, (err, edit) => {
          if (err) return console.log(err.message)
          Article.update({_id: article._id}, {'$push': {edits: edit._id}}, (err, data) => {
            if (err) return console.log(err.message)
          })
        })
      })
    }

  })
}