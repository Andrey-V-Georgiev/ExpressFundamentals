const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {

 getCreate: (req, res) => {
    res.render('pages/create', req)
  },

  postCreate: (req, res) => {

    let author = req.user.username
    let title = req.body.title
    let imageUrl = req.body.imageUrl
    let content = req.body.content

    Article.create({title: title, edits: []}, (err, article) => {
      if (err) return console.log(err.message)

      Edit.create({author: author, imageUrl: imageUrl, content: content, articleId: article._id}, (err, edit) => {
        if (err) return console.log(err.message)

        Article.update({_id: article._id}, {'$push': {edits: edit._id}}, (err, data) => {
          if (err) return console.log(err.message)
        })
      })

      res.redirect(`/article/${article._id}`)
    })
  }
}

