const expected = {
  array: [1, 3],
  evens: [2, 4],
  newArray: [],
  all: [1, 2, 3, 4, 5],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('remove', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
