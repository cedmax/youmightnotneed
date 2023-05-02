const expected = {
  array: true,
  arrayLike: true,
  string: true,
  obj: false,
  funct: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isArrayLike', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
