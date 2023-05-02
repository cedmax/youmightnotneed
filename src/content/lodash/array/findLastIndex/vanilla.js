const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
]

exports.found = users.findLastIndex(o => !o.active)
// => 2

exports.notFound = users.findLastIndex(o => !o.user)
// => -1
