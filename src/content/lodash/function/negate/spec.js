const expected = [1, 3, 5]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('negate', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
