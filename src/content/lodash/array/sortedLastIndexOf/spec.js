const expected = 3

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sortedLastIndexOf', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
