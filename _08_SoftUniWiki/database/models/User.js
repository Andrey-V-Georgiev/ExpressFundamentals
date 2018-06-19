const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {type: mongoose.SchemaTypes.String, required: true},
  password: {type: mongoose.SchemaTypes.String, required: true},
  salt: {type: mongoose.SchemaTypes.String, required: true},
  isAdmin: {type: mongoose.SchemaTypes.Boolean, required: true},
});

const User = mongoose.model('User', userSchema)

module.exports = User