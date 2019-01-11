const expected = {
  round: 4,
  precision: 4.01,
  negPrecision: 4100,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('round', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
