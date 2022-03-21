const expected = {
  example1: [1, 2, [3, [4]], 5],
  example2: [1, 2, 3, [4], 5],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flattenDepth', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
