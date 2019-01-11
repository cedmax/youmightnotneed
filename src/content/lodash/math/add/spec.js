const expected = 10

const lodash = require('./lodash')
const plain = require('./vanilla')

test('add', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
