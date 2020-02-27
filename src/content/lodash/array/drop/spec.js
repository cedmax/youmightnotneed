const expected = {
  simple: [2, 3],
  withNumber: [3],
  withNumberVariant: [],
  withZero: [1, 2, 3],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('drop', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
