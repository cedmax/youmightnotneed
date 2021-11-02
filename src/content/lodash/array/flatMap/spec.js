const expected = [1, 1, 2, 2]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flatMap', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
