const expected = 'c'

const lodash = require('./lodash')
const plain = require('./vanilla')

test('last', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
