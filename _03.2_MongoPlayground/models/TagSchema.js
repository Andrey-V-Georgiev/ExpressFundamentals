const mongoose = require('mongoose')
const tagSchemaObject = {
  name: {type: mongoose.SchemaTypes.String, require: true},
  creationDate: {type: mongoose.SchemaTypes.Date, default: Date.now},
  images: [{type: mongoose.SchemaTypes.ObjectId}]
}
const tagSchema = new mongoose.Schema(tagSchemaObject)
const tagModel = mongoose.model('Tag', tagSchema)

module.exports = tagModel