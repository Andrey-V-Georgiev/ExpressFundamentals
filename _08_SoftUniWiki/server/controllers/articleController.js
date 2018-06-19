const authCheck = require('../authStatus')
const Article = require('../../database/models/Article')

module.exports = (app) => {
  //todo auth
  app.get('/article/:id', (req, res) => {

    const articleId = req.params.id
    Article.findById(articleId)
      .populate({path: 'edits', model: 'Edit'})
      .then(article => {
        let lastEdit = article.edits.sort(function(a,b){
          if (a.creation < b.creation) {
            return -1
          } else {
            return 1
          }
        })[0]

        res.render('pages/article', {lastEdit, article})
      })
  })
}
