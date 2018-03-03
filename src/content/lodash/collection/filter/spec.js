const expected = [12, 130, 44]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('filter', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
