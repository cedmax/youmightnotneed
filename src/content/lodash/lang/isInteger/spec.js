const expected = {
  integer: true,
  lowerBound: false,
  infinite: false,
  stringNumber: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isInteger', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
