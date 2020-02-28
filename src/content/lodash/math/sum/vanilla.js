module.exports = [4, 2, 8, 6].reduce((acc, num) => {
  acc += num
  return acc
}, 0)
// => 20
