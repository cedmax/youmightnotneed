// Regex explained: https://regexr.com/58j0k
const toPath = path => path.match(/([^[.\]])+/g)

exports.example1 = toPath('a.b.c')
// => ['a', 'b', 'c']

exports.example2 = toPath('a[0].b.c')
// => ['a', '0', 'b', 'c']
