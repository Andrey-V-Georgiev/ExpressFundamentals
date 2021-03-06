const Image = require('mongoose').model('Image')
const formidable = require('formidable')
const ObjectId = require('mongoose').Types.ObjectId

module.exports = (req, res) => {
  if (req.pathname === '/addImage' && req.method === 'POST') {
    addImage(req, res)
  } else if (req.pathname === '/delete' && req.method === 'GET') {
    deleteImg(req, res)
  } else {
    return true
  }
}

function addImage (req, res) {
  const form = new formidable.IncomingForm()
  form.parse(req, (err, fields, files) => {
    if (err) {
      console.log(err)
    } else {
      const tags = fields.tagsId.split(',').reduce((accumulator, currentValue, currentIndex, arr) => {
        if (accumulator.includes(currentValue) || currentValue.length === 0) {
          return accumulator
        } else {
          accumulator.push(currentValue)
          return accumulator
        }
      }, []).map(ObjectId)

      const image = {
        url: fields.imageUrl,
        description: fields.description,
        tags: tags
      }

      Image.create(image).then((image) => {
        res.writeHead(302, {location: '/'})
        res.end()
      }).catch((err) => {
        res.writeHead(500, {'content-type': 'text/plain'})
        res.write('500 Server Error')
        res.end()
      })
    }
  })
}

function deleteImg (req, res) {
  Image.deleteOne({_id: req.pathquery.id}).then(() => {
    res.writeHead(302, {location: '/'})
    res.end()
  }).catch((err) => {
    res.writeHead(500, {'content-type': 'text/plain'})
    res.write('500 Server Error')
    res.end()
  })
}
