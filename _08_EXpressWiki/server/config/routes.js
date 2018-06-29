const controllers = require('../controllers/index')
const auth = require('./auth')

module.exports = (app) => {

  app.get('/register', controllers.users.getRegister)
  app.post('/register', controllers.users.postRegister)

  app.get('/', controllers.users.getLogin)
  app.get('/login', controllers.users.getLogin)
  app.post('/login', controllers.users.postLogin)

  app.post('/logout', controllers.users.postLogout)

  app.get('/home', controllers.home.getHome)

  app.get('/allArticles', controllers.allArticles.getAllArticles)

  app.get('/create', auth.isAuthenticated, controllers.create.getCreate)
  app.post('/create', auth.isAuthenticated, controllers.create.postCreate)

  app.get('/article/:id',  controllers.article.getArticle)

  app.get('/latestArticle', controllers.latestArticle.getLatestArticle)

  app.get('/edit/:id', auth.isAuthenticated, controllers.edit.getEdit)
  app.post('/edit/:id', auth.isAuthenticated, controllers.edit.postEdit)

  app.get('/history/:id', controllers.history.getHistory)

  app.get('/lockArticle/:id', controllers.article.lockArticle)
  app.get('/unlockArticle/:id', controllers.article.unlockArticle)

  app.post('/search', controllers.search.searchArticles)

/////////////////////////////////////////////////////////////////////////////
  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found!')
    res.end()
  })
}
