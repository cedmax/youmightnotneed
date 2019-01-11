const mean = arr => arr.reduce((acc, num) => acc + num, 0) / arr.length

module.exports = mean([4, 2, 8, 6])
// => 5
