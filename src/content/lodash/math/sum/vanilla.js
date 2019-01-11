const sum = arr =>
  arr.reduce((acc, num) => {
    acc += num
    return acc
  }, 0)

module.exports = sum([4, 2, 8, 6])
// => 20
