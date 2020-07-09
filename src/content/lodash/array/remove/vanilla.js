const remove = (array, iteratee) => {
  // in order to not mutate the original array until the very end
  // we want to cache the index to remove while preparing the result
  const toRemove = []
  const result = array.filter((item, i) => iteratee(item) && toRemove.push(i))

  // just before returning we can then remove the items, but making sure it's
  // reversed, because otherwise the indexes would shift at each removal
  toRemove.reverse().forEach(i => array.splice(i, 1))
  return result
}

const array = [1, 2, 3, 4]
const evens = remove(array, n => {
  return n % 2 === 0
})

exports.array = array
// => [1, 3]

exports.evens = evens
// => [2, 4]

const newArray = [1, 2, 3, 4, 5]

exports.all = remove(newArray, () => newArray.length > 0)
// => [1, 2, 3, 4, 5]

exports.newArray = newArray
// => []
