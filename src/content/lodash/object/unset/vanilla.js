const unset = (obj, path) => {
  const pathArray = Array.isArray(path) ? path : path.match(/([^[.\]])+/g)

  pathArray.reduce((acc, key, i) => {
    if (i === pathArray.length - 1) delete acc[key]
    return acc[key]
  }, obj)
}
const object = { a: [{ bar: { c: 7, d: 6 } }] }

unset(object, 'a[0].bar.c')
module.exports = object
// => { 'a': [{ 'bar': { 'd': 6 } }] };
