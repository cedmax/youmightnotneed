const _ = require('lodash')

const object = {
  a: [{ b: 2 }, { d: 4 }],
}

const other = {
  a: [{ c: 3 }, { e: 5 }],
}

exports.simple = _.merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const arrayWithObjects = [{
  a: 'testdata',
  b: 123,
  c: {
    ca: 1,
    cb: [{ a: 1 }, { b: 1 }],
  },
}, {
  a: 1,
  b: 'abc',
}, {
  a: 'test',
}]

const otherArray = [{
  a: 'testdata',
  b: 555,
  c: {
    cc: 1,
    cb: [{ a: 'test', x: 2 }, { b: 56 }, { c: 1 }],
  },
}, {
  b: 2,
  c: 'def',
}]

exports.complex = _.merge(arrayWithObjects, otherArray)
// look at the spec file for the output
