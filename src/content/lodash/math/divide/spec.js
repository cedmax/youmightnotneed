const expected = 1.5

const lodash = require('./lodash')
const plain = require('./vanilla')

test('divide', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
