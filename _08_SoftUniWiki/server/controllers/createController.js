const authCheck = require('../authStatus')
const Article = require('../../database/models/Article')
const Edit = require('../../database/models/Edit')

module.exports = (app) => {

  app.get('/create', authCheck, (req, res) => {
    res.render('pages/create', req)
  })

  app.post('/create', authCheck, (req, res) => {
    let title = req.body.title
    let authorId = req.user._id

    let content = req.body.content

    Article.create({title: title, edits: []}, (err, article) => {
      if (err) return console.log(err.message)
      Edit.create({authorId: authorId, content: content, articleId: article._id}, (err, edit) => {
        if (err) return console.log(err.message)
        Article.update({_id: article._id}, {'$push': {edits: edit._id}}, (err, data) => {
          if (err) return console.log(err.message)
        })
      })
      res.redirect(`/article/${article._id}`)
    })
  })
}

// { title: 'Brutal Boxing', content: 'wgqerhe' }
// { _id: 5b261befcecc080d8c87d930, na usera
//   email: 'email',