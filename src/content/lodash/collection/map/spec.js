const expected = [3, 6, 9]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('map', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
