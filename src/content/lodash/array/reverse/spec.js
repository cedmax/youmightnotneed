const expected = {
  return: [3, 2, 1],
  mutated: [3, 2, 1],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('reverse', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
