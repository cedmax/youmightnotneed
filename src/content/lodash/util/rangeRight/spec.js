const expected = {
  example1: [3, 2, 1, 0],
  example2: [-3, -2, -1, 0],
  example3: [4, 3, 2, 1],
  example4: [15, 10, 5, 0],
  example5: [-3, -2, -1, 0],
  example6: [1, 1, 1],
  example7: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('rangeRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
