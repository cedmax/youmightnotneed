const expected = ['a', 'b', 'c', 'e', 'f', 'g']

const lodash = require('./lodash')
const plain = require('./vanilla')

test('reject', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
