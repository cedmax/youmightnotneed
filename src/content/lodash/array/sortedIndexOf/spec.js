const expected = 1

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sortedIndexOf', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
