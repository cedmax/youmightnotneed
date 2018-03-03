const expected = 1

const lodash = require('./lodash')
const plain = require('./vanilla')

test('head', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
