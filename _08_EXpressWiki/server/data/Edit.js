const mongoose = require('mongoose')
const Schema = mongoose.Schema

const editSchema = new Schema({
  author: {type: mongoose.SchemaTypes.String, required: true},
  imageUrl: {type: mongoose.SchemaTypes.String, required: true},
  creation: {type: mongoose.SchemaTypes.Date, default: Date.now},
  content: {type: mongoose.SchemaTypes.String, required: true},
  articleId: {type: mongoose.SchemaTypes.ObjectId, ref: 'Article'}
})

const Edit = mongoose.model('Edit', editSchema)

module.exports = Edit