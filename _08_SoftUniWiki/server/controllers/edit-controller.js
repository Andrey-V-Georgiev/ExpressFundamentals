const Article = require('../data/Article')
const Edit = require('../data/Edit')

module.exports = {

  getEdit: async (req, res) => {
    let articleId = req.params.id

    let article = await Article.findById(articleId).populate({path: 'edits', model: 'Edit'})
    let edit = article.edits[article.edits.length - 1]

    res.render('pages/edit', {article, edit, articleId})
  },

  postEdit: (req, res) => {
    let articleId = req.params.id
    let newContent = req.body.content

    Article.findById(articleId).populate({path: 'edits', model: 'Edit'}).then(article => {

      let previousEdit = article.edits[article.edits.length - 1]

      let newEditObject = {
        author: previousEdit.author,
        imageUrl: previousEdit.imageUrl,
        creation: Date.now(),
        content: newContent,
        articleId: article._id
      }

     Edit.create(newEditObject).then(newEdit => {
       Article.update({ _id: articleId }, {$push: {edits: newEdit}}).then(article => {
         res.redirect(`/article/${articleId}`)
       })
     })
    })
  }
}