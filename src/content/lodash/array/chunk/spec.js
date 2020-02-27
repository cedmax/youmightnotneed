const expected = {
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
