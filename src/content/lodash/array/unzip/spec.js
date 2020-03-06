const expected = [
  ['a', 'b'],
  [1, 2],
  [true, false],
]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('unzip', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
