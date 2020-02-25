const identity = a => a

const object = { a: 1 }

module.exports = identity(object) === object
// => true
