const remove = (array, iteratee) =>
  array.filter((item, i) => iteratee(item) && array.splice(i, 1))

const array = [1, 2, 3, 4]
const evens = remove(array, n => {
  return n % 2 === 0
})

exports.array = array
// => [1, 3]

exports.evens = evens
// => [2, 4]
