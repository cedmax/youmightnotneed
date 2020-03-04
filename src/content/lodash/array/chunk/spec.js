const expected = {
  noSize: [['a'], ['b'], ['c'], ['d'], ['e'], ['f'], ['g']],
  simple: [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']],
  chunkSizeZero: [],
  chunkSizeNegative: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('chunk', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
