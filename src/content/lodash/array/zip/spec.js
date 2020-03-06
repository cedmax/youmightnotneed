const expected = [
  ['a', 1, true],
  ['b', 2, false],
]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('zip', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
