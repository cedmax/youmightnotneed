const expected = undefined

const lodash = require('./lodash')
const plain = require('./vanilla')

test('noop', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
