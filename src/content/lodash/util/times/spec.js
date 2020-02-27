const expected = {
  simple: [0, 1, 2],
  withIteratee: [3, 4, 5],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('times', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
