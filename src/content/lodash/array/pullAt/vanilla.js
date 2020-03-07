const pullAt = (arr, idxs) =>
  idxs
    .reverse()
    .map(idx => arr.splice(idx, 1)[0])
    .reverse()

const array = ['a', 'b', 'c', 'd']

exports.return = pullAt(array, [1, 3])
// => ['b', 'd']

exports.array = array
// => ['a', 'c']
