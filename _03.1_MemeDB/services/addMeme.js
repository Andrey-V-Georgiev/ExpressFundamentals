const formidable = require('formidable')
const shortid = require('shortid')
const database = require('../config/dataBase')

class Meme {
  constructor (id, title, memeSrc, description, privacy) {
    this.id = id
    this.title = title
    this.memeSrc = memeSrc
    this.description = description
    this.privacy = privacy
    this.dateStamp = Date.now()
  }
}

let createNewMeme = (fields, newFilename, memeSrc) => {
  let id = shortid.generate()
  let title = fields.memeTitle
  let description = fields.memeDescription
  let privacy = fields.status
  return new Meme(id, title, memeSrc, description, privacy)
}

let addMeme = (req, res) => {
  let form = new formidable.IncomingForm()
  let newFilename = shortid.generate()
  let memeSrc = `./public/memeStorage/${newFilename}.jpg`

  form.on('fileBegin', (name, file) => {
    file.path = memeSrc
  })

  form.parse(req, (err, fields, files) => {
    if (err) {
      res.showError()
    } else {
      let newMeme = createNewMeme(fields, newFilename, memeSrc)
      database.save(newMeme).then(() => {
        res.writeHead(302, {location: '/viewAllMemes'})
        res.end()
      })
    }
  })
}

module.exports = addMeme