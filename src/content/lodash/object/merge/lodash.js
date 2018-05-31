const _ = require('lodash')

const object = {
  a: [{ b: 2 }, { d: 4 }],
}

const other = {
  a: [{ c: 3 }, { e: 5 }],
}

_.merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

module.exports = _.merge
