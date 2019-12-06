const expected = false

const lodash = require('./lodash')
const plain = require('./vanilla')

test('stubFalse', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
