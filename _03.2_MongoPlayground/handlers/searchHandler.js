const fs = require('fs')
const Image = require('../models/ImageSchema')
const Tag = require('../models/TagSchema')

let searchHandler = (req, res) => {

  if (req.pathname === '/search') {

    fs.readFile('./views/results.html', 'utf8', (err, html) => {
      if (err) {
        res.writeHead(404, {'content-type': 'text/plain'})
        res.write('404 Error')
        res.end()

      }
      const params = {}
      let tagName = req.pathquery.tagName

      if (tagName) {
        const tags = tagName.split(',').filter(e => e.length > 0)

        //TODO
        if (tags.length > 0) {
          Tag.find({name: {$in: tags}}).then((data) => {
            const tagIds = data.map(m => m._id)
            params.tags = tagIds
            getImagesAndRespond(params)
          })
        }else {
          getImagesAndRespond(params)
        }
      } else {
      getImagesAndRespond(params)
    }

      function getImagesAndRespond (params) {
        Image.find(params).then((data) => {
          let imageHtml = ''
          for (let image of data) {
            imageHtml += imageTemplate(image)
          }
          html = html.replace(`<div class='replaceMe'></div>`, imageHtml)

          res.writeHead(200, {'content-type': 'text/html'})
          res.write(html)
          res.end()
        })
      }
    })

  } else {
    return true
  }
}

function imageTemplate (image) {
  return `<fieldset id ="${image._id}">
            <img src="${image.url}">
            <p>${image.description}<p/>
            <button onclick='location.href="/delete?id=${image._id}"' class='deleteBtn'>Delete
            </button> 
            </fieldset>`
}

module.exports = searchHandler


