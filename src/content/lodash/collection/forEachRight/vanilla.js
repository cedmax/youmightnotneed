const forEachRight = (array, iteratee) =>
  [...array].reverse().forEach((val, index) => {
    iteratee(val, array.length - 1 - index, array)
  })

const array = ['a', 'b', 'c']

module.exports = forEachRight(array, (item, index) => {
  console.log(item, index)
})
// => c 2
// => b 1
// => a 0
