const expected = {
  return: [3],
  array: [2, 1, 2, 3],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('without', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
