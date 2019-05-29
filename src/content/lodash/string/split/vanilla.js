exports.all = 'a-b-c'.split('-')
// => ['a', 'b', 'c']

exports.justTwo = 'a-b-c'.split('-').slice(0, 2)
// => ['a', 'b']
