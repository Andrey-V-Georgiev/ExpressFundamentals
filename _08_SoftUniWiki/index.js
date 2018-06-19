require('./database/config').then(() => {

  const app = require('./server/config')

  require('./server/controllers/homeController')(app)
  require('./server/controllers/loginController')(app)
  require('./server/controllers/registerController')(app)
  require('./server/controllers/logoutController')(app)
  require('./server/controllers/allArticlesController')(app)
  require('./server/controllers/articleController')(app)
  require('./server/controllers/createController')(app)
  require('./server/controllers/editController')(app)
  require('./server/controllers/historyController')(app)
  require('./server/controllers/searchController')(app)

})





