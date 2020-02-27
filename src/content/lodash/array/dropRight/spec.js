const expected = {
  simple: [1, 2],
  withNumber: [1],
  withNumberVariant: [],
  withZero: [1, 2, 3],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('dropRight', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
