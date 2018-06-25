const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {
  getHome: async (req, res) => {

    let articles = await Article.find()

    const lastArticle = articles[articles.length - 1]
    const recentArticles = articles.slice(Math.max(articles.length - 3, 0)).reverse()

    const lastEditId = lastArticle.edits.pop()
    let lastEdit = await Edit.findById(lastEditId)

    let contentArr = lastEdit.content.split('\s').filter(e => e !== '')
    let halfContent = contentArr.join('')
    if (contentArr.length > 50) {
      halfContent = contentArr.slice(0, 50).join('') + '...'
    }
    let fullContent = contentArr.join('')


    res.render('pages/home', {
      lastArticle,
      fullContent,
      halfContent,
      recentArticles
    })
  }
}
