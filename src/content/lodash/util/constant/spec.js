const expected = 42

const lodash = require('./lodash')
const plain = require('./vanilla')

test('constant', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
