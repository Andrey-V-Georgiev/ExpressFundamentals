const db = require('../config/dataBase')

async function viewAllFiller() {
  let dbPromise = await db.load()
  let dynamicHtml = ''
  for (let meme of dbPromise) {
    dynamicHtml +=
      `<div class="meme">
          <a href="/getDetails?id=${meme.id}">
          <img class="memePoster" src="${meme.memeSrc}"/>          
       </div>`
  }
  return dynamicHtml
}

module.exports = viewAllFiller