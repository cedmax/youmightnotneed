const expected = 2

const lodash = require('./lodash')
const plain = require('./vanilla')

test('subtract', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
