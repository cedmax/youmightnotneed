const expected = 5

const lodash = require('./lodash')
const plain = require('./vanilla')

test('wrap', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
