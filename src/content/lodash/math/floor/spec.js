const expected = {
  floor: 4,
  precision: 0.04,
  negPrecision: 4000,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('floor', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
