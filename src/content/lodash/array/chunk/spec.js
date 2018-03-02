const expected = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g']]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('chunk', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
