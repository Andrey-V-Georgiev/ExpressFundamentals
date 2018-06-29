const users = require('./users-controller')
const home = require('./home-controller')
const allArticles = require('./all-articles-controller')
const create = require('./create-controller')
const article = require('./article-controller')
const latestArticle = require('./latest-article')
const edit = require('./edit-controller')
const history = require('./history-controller')
const search = require('./search-controller')

module.exports = {
  users: users,
  home: home,
  allArticles: allArticles,
  create: create,
  article: article,
  latestArticle: latestArticle,
  edit: edit,
  history: history,
  search: search
}
