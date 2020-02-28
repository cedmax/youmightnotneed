const expected = { a: 1, b: 2 }

const lodash = require('./lodash')
const plain = require('./vanilla')

test('fromPairs', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
