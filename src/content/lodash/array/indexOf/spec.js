const expected = 2

const lodash = require('./lodash')
const plain = require('./vanilla')

test('indexOf', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
