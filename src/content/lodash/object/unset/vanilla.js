const unset = (obj, path) => {
  if (typeof path === 'string') {
    path = path.match(/([^[.\]])/g)
  }

  path.reduce((acc, key, i) => {
    if (i === path.length - 1) delete acc[key]
    return acc[key]
  }, obj)
}
const object = { a: [{ b: { c: 7, d: 6 } }] }

unset(object, 'a[0].b.c')
module.exports = object
// => { 'a': [{ 'b': { 'd': 6 } }] };
