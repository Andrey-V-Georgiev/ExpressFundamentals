const mongoose = require('mongoose')
const connectionString = 'mongodb://localhost:27017/mongoplayground'
mongoose.Promise = global.Promise

require('../models/TagSchema')
require('../models/ImageSchema')

module.exports = mongoose.connect(connectionString)

