const expected = {
  default: [1],
  two: [1, 2],
  all: [1, 2, 3],
  none: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('take', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
