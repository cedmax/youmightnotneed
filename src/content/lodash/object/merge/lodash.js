const _ = require('lodash')

const object = {
  a: [{ b: 2 }, { d: 4 }],
}

const other = {
  a: [{ c: 3 }, { e: 5 }],
}

exports.simple = _.merge(object, other)
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }

const array = [{ a: 1 }, { b: 2 }, { c: 3 }, [1, 2, 3]]
const anotherArray = [{ b: 1 }, { c: 2 }, { d: 3 }, [4, 5, 6, 7]]
const lastArray = [{ f: 1 }, { c: 5 }, { e: 3 }, []]

exports.array = _.merge(array, anotherArray, lastArray)
// [{"a": 1, "b": 1, "f": 1}, {"b": 2, "c": 5}, {"c": 3, "d": 3, "e": 3}, [4, 5, 6, 7]]

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

const yetAnotherOne = [{
  c: {
    cb: [{ a: 'test', x: 2 }, { b: 56 }, { c: 1 }, { d: 12 }],
  },
}]

const evenMore = [{
  d: 1,
}, {
  a: 1,
  b: 'abc',
}, {
  a: 'test',
}, {
  c: 2,
}]

exports.complex = _.merge(arrayWithObjects, otherArray, yetAnotherOne, evenMore)
// look at the spec file for the output
