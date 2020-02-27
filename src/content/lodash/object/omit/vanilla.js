const omit = (obj, props) => {
  obj = { ...obj }
  props.forEach(prop => delete obj[prop])
  return obj
}
const object = { a: 1, b: '2', c: 3 }

module.exports = omit(object, ['a', 'c'])
// => { 'b': '2' }
