const expected = 20

const lodash = require('./lodash')
const plain = require('./vanilla')

test('sum', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
