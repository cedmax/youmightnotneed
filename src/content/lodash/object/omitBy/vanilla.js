const isNumber = a => typeof a === 'number'

const omitBy = (obj, check) => {
  obj = { ...obj }
  Object.entries(obj).forEach(([key, value]) => check(value) && delete obj[key])
  return obj
}

const object = { a: 1, b: '2', c: 3 }

module.exports = omitBy(object, isNumber)
// => { 'b': '2' }
