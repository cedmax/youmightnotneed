const expected = [1, 2]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('compact', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
