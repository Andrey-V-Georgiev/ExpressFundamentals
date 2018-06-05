const mongoose = require('mongoose')

const imageSchema = new mongoose.Schema({
  url: {type: mongoose.SchemaTypes.String, reqire: true},
  creationDate: {type: mongoose.SchemaTypes.Date, default: Date.now},
  description: {type: mongoose.SchemaTypes.String},
  tags: [{type: mongoose.SchemaTypes.ObjectId}]
})

module.exports = mongoose.model('Image', imageSchema)