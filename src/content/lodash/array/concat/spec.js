const expected = [1, 2, 3, [4]]

const lodash = require('./lodash')
const plain = require('./vanilla')

test('concat', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
