const expected = 9

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flow', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
