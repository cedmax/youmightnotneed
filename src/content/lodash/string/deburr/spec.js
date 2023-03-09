const expected = 'deja vu'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('deburr', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
