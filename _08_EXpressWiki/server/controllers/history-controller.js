const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {

  getHistory: async (req, res) => {
    let articleId = req.params.id

    let article = await Article.findById(articleId).populate({path: 'edits', model: 'Edit'})
    let edits = article.edits

    res.render('pages/history', {edits, article})

  }
}
