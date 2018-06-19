const authCheck = require('../authStatus')
const Article = require('../../database/models/Article')

module.exports = (app) => {

  app.get('/history/:id',  (req, res) => {
    let articleId = req.params.id

    Article.findById(articleId)
      .populate({path: 'edits', model: 'Edit'})
      .then(article => {

        let edits = article.edits

        res.render('pages/history', {edits})
      })
  })
}