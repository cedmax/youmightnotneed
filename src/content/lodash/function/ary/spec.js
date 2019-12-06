const expected = [6, 8, 10]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('ary', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
