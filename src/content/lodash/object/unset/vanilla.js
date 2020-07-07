const unset = (obj, path) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])/g)

  pathArray.reduce((acc, key, i) => {
    if (i === pathArray.length - 1) delete acc[key]
    return acc[key]
  }, obj)
}
const object = { a: [{ b: { c: 7, d: 6 } }] }

unset(object, 'a[0].b.c')
module.exports = object
// => { 'a': [{ 'b': { 'd': 6 } }] };
