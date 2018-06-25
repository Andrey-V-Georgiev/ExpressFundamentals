const Article = require('../data/Article')

module.exports = {

  getAllArticles: (req, res) => {

    Article.find().then(allArticles => {
      allArticles = allArticles.sort(function(a,b){
        if (a.title[0] < b.title[0]) {
          return -1
        } else {
          return 1
        }
      })
      res.render('pages/all-articles', {allArticles})
    })
  }
}