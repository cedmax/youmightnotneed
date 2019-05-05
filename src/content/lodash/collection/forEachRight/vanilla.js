function forEachRight (array, iteratee) {
  array.slice().reverse().forEach((val, index) => {
    iteratee(val, Math.abs(array.length - index), array)
  })
}

const array = ['a', 'b', 'c']

module.exports = forEachRight(array, (item, index) => {
  console.log(item, index)
})
// => c 2
// => b 1
// => a 0
