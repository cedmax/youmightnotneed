const expected = {
  ceil: 5,
  precision: 6.01,
  negPrecision: 6100,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('ceil', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
