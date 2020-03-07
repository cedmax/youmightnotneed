const expected = [1, 2]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sortedUniq', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
