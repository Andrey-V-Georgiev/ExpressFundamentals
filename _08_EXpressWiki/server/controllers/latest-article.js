const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {
  getLatestArticle: async (req, res) => {

    let articles = await Article.find()
    const article = articles[articles.length - 1]

    const lastEditId = article.edits.pop()
    let lastEdit = await Edit.findById(lastEditId)

    res.render('pages/article', {article, lastEdit, lastEditId})
  }
}