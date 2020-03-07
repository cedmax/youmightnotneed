const expected = {
  default: [3],
  two: [2, 3],
  all: [1, 2, 3],
  none: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('takeRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
