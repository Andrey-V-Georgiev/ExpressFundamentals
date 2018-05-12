let fs = require('fs')
let storage = {}

function get (key) {
  if (typeof key !== 'string') {
    throw new Error('Key must be string!')
  } else if (!storage.hasOwnProperty(key)) {
    throw new Error('Key does not exist!')
  }
  return storage[key]
}

function put (key, value) {
  if (typeof key !== 'string') {
    throw new Error('Key must be string!')
  } else if (storage.hasOwnProperty(key)) {
    throw new Error('Key already exists!')
  }
  storage[key] = value
}

function getAll () {
  if (Object.keys(storage).length === 0) {
    throw new Error('There are no items in the storage')
  }
  return storage
}

function update (key, newValue) {
  if (typeof key !== 'string') {
    throw new Error('Key must be string!')
  } else if (!storage.hasOwnProperty(key)) {
    throw new Error('Key does not exist!')
  }
  storage[key] = newValue
}

function remove (key) {
  if (typeof key !== 'string') {
    throw new Error('Key must be string!')
  } else if (!storage.hasOwnProperty(key)) {
    throw new Error('Key does not exist!')
  }
  delete storage[key]
}

function clear () {
  storage = {}
}

function save () {
  fs.writeFileSync('./storage.json', JSON.stringify(storage), 'utf8')
}

function load () {
  fs.readFile('./storage.json', 'utf8', (err, data) => {
    if (err) {
      throw err
    }
    console.log(JSON.parse(data))
  })
}

module.exports = {
  put: put,
  get: get,
  getAll: getAll,
  update: update,
  delete: remove,
  clear: clear,
  save: save,
  load: load
}
