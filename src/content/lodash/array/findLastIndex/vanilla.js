const findLastIndex = (arr, func) => {
  const reverseIdx = [...arr].reverse().findIndex(func)
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx + 1)
}

const users = [
  { user: 'barney', active: true },
  { user: 'fred', active: false },
  { user: 'pebbles', active: false },
]

exports.found = findLastIndex(users, o => !o.active)
// => 2

exports.notFound = findLastIndex(users, o => !o.user)
// => -1
