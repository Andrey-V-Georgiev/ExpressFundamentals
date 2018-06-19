const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: {type: mongoose.SchemaTypes.String, required: true},
  lockedStatus : {type: mongoose.SchemaTypes.Boolean, required: true, default: false},
  edits: { type: [mongoose.SchemaTypes.ObjectId], ref: 'Edit'}
})

const Article = mongoose.model('Article', articleSchema)

module.exports = Article