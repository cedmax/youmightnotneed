const expected = [6, 8, 10]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('unary', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
