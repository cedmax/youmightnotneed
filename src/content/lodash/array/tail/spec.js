const expected = [2, 3]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('tail', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
