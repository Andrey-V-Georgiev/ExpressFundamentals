const Article = require('../data/Article')

module.exports = {

  searchArticles: (req, res) => {
    let search = req.body.search

    Article.find().then(allArticles => {
      allArticles = allArticles.filter(a =>  a.title.startsWith(search))
      console.log(allArticles)
      res.render('pages/all-articles', {allArticles})
    })
  }
}