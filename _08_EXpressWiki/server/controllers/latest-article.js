const Article = require('../data/Article')
const Edit = require('../data/Edit')
const auth = require('../config/auth')

module.exports = {
  getLatestArticle: async (req, res) => {

    let articles = await Article.find()
    const article = articles[articles.length - 1]

    const lastEditId = article.edits.pop()
    let lastEdit = await Edit.findById(lastEditId)

    const isAdmin = auth.isAdmin(req)

    if (article.lockedStatus) {
      res.render('pages/article', {lastEdit, article, unlocked: isAdmin})
    } else {
      res.render('pages/article', {lastEdit, article,  unlocked: true})
    }
  }
}