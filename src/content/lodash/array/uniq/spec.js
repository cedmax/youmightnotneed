const expected = [2, 1]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('uniq', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
