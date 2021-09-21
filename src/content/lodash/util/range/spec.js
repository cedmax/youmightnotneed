const expected = {
  example1: [0, 1, 2, 3],
  example2: [0, -1, -2, -3],
  example3: [1, 2, 3, 4],
  example4: [0, 5, 10, 15],
  example5: [0, -1, -2, -3],
  example6: [1, 1, 1],
  example7: [],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('range', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
