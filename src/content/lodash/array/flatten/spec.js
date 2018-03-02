const expected = [1, 2, [3, [4]], 5]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flatten', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})