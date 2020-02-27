const expected = {
  integer: true,
  lowerBound: true,
  infinite: false,
  stringNumber: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isFinite', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
