const expected = 24

const lodash = require('./lodash')
const plain = require('./vanilla')

test('multiply', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
