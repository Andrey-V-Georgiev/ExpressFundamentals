const db = require('../config/dataBase')

function getAllPosters () {
  let htmlPosters = ''
  db.sort(function (a, b) {
    if (Number(a.movieYear) <= Number(b.movieYear)) {
      return -1
    } else {
      return 1
    }
  })

  for (let i in db) {
    let movie = db[i]
    let poster = decodeURIComponent(movie.moviePoster)
    htmlPosters +=
      `<div class="movie">
            <a href="/movies/details/${i}">
              <img class="moviePoster" src="${poster}"/> 
              </a>         
        </div>`
  }
  return htmlPosters
}

module.exports = getAllPosters