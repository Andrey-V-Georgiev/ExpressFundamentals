const fs = require('fs')

let db = []
let dbPath = './db/db.json'

let load = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(dbPath, (err, data) => {
      if (err) {
        console.log(err)
        return
      }
      db = JSON.parse(data)
      resolve(db)
    })
  })
}

let save = (newMeme) => {
  return new Promise((res, rej) => {
    fs.readFile(dbPath, 'utf8', async (err, data) => {
      if (err) {
        res.showError()
      } else {
        let dbArr = JSON.parse(data)
        dbArr.push(newMeme)
        let updatedDbArrJSON = JSON.stringify(dbArr)
        await fs.writeFile('./db/db.json', updatedDbArrJSON, 'utf8', (err) => {
          if (err) {
            console.log(err)
          }
        })
      }
      res()
    })
  })
}

module.exports = {
  load: load,
  save: save
}
