const expected = 9

const lodash = require('./lodash')
const plain = require('./vanilla')

test('flowRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
