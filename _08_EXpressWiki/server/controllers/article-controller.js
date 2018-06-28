const Article = require('../data/Article')
const auth = require('../config/auth')

module.exports = {

  getArticle: (req, res) => {

    const articleId = req.params.id

    Article.findById(articleId)
      .populate({path: 'edits', model: 'Edit'})
      .then(article => {
        let lastEdit = article.edits.sort(function (a, b) {
          if (a.creation > b.creation) {
            return -1
          } else {
            return 1
          }
        })[0]

        const isAdmin = auth.isAdmin(req)

        if (article.lockedStatus) {
            res.render('pages/article', {lastEdit, article, unlocked: isAdmin})
        } else {
          res.render('pages/article', {lastEdit, article, unlocked: true})
        }
      })
  },

  lockArticle: (req, res) => {
    const articleId = req.params.id
    Article.update({ _id: articleId }, { $set: { lockedStatus: true}})
      .then(() => {
          res.redirect('/allArticles')
      }).catch(err => {
      console.log(err.message)
    })
  },

  unlockArticle: (req, res) => {
    const articleId = req.params.id
    Article.update({ _id: articleId }, { $set: { lockedStatus: false}})
      .then(() => {
        res.redirect('/allArticles')
      }).catch(err => {
      console.log(err.message)
    })
  }
}

