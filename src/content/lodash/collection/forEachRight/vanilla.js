function forEachRight (array, iteratee) {
  array
    .slice()
    .reverse()
    .forEach((val, index) => {
      iteratee(val, Math.abs(array.length - index), array)
    })
}

function iteratee (item, index) {
  console.log(item, index)
}

const array = ['a', 'b', 'c']

module.exports = forEachRight(array, iteratee)
// => c 2
// => b 1
// => a 0
