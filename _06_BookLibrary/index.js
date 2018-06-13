const express = require('express')
const app = express()
const port = 3000
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

require('./config/database').then(() =>{
  app.listen(port, () => console.log(`Express is running on port: ${port}`))
  app.engine('.hbs', handlebars({
    extname: '.hbs',
    layoutsDir: 'views/layouts',
    defaultLayout: 'main'
  }))
  app.set('view engine', '.hbs');
  app.use(express.static('static'))
  app.use(bodyParser.urlencoded({ extended: true }))

  require('./controllers/homeController').homeController(app)
  require('./controllers/addBookController').addBookController(app)
  require('./controllers/detailsController').detailsController(app)
  require('./controllers/viewAllController').viewAllController(app)
})

