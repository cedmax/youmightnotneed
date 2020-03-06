const expected = [2, 1]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('union', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
