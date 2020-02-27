const expected = { a1: 1, b2: 2 }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('mapKeys', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
