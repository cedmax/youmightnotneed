const expected = true

const lodash = require('./lodash')
const plain = require('./vanilla')

test('startsWith', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
