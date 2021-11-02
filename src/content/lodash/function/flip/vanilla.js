const flip =
  func =>
  (...args) =>
    func(...args.reverse())

const flipped = flip((...args) => args)

module.exports = flipped('a', 'b', 'c', 'd')
// => ['d', 'c', 'b', 'a']
