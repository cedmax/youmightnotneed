const expected = 6

const lodash = require('./lodash')
const plain = require('./vanilla')

test('reduce', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
