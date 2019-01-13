const inRange = (num, rangeStart, rangeEnd = 0) =>
  (rangeStart < num && num < rangeEnd) || (rangeEnd < num && num < rangeStart)

exports.example1 = inRange(3, 2, 4)
// => true

exports.example2 = inRange(4, 8)
// => true

exports.example3 = inRange(4, 2)
// => false

exports.example4 = inRange(2, 2)
// => false

exports.example5 = inRange(1.2, 2)
// => true

exports.example6 = inRange(5.2, 4)
// => false

exports.example7 = inRange(-3, -2, -6)
// => true
