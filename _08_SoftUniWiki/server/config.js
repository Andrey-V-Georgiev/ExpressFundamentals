const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const passport = require('./passport')

app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())
app.use(session({secret: 'dog', resave: false, saveUninitialized: false}))
app.use(passport.initialize())
app.use(passport.session())

app.engine('.hbs', handlebars({
  extname: '.hbs',
  layoutsDir: 'views/layouts',
  defaultLayout: 'main'
}))
app.set('view engine', '.hbs')
app.use(express.static('static'))
app.listen(port, () => console.log(`Express is running on port: ${port}`))

module.exports = app