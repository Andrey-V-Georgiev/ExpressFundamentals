const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {
  getHome: async (req, res) => {

    let articles = await Article.find()

    const lastArticle = articles[articles.length - 1]
    let recentArticles = articles.slice(Math.max(articles.length - 3, 0)).reverse()

    const lastEditId = lastArticle.edits.pop()
    let lastEdit = await Edit.findById(lastEditId)

    let contentArr = lastEdit.content.split('\s').filter(e => e !== '')
    let halfContent = contentArr.join('')
    if (contentArr.length > 12) {
      halfContent = contentArr.slice(0, 12).join('') + '...'
    }
    let fullContent = contentArr.join('')

    let secondEdit = await Edit.findById(recentArticles[1].edits.pop())
    let thirdEdit = await Edit.findById(recentArticles[2].edits.pop())


    res.render('pages/home', {
      lastArticle,
      fullContent,
      halfContent,
      firstArticle: recentArticles[0],
      secondArticle: recentArticles[1],
      thirdArticle: recentArticles[2],
      firstEdit: lastEdit.imageUrl,
      secondImage: secondEdit.imageUrl,
      thirdImage: thirdEdit.imageUrl
    })
  }
}
