const expected = []

const lodash = require('./lodash')
const plain = require('./vanilla')

test('stubArray', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
