const expected = {
  NaN: true,
  NumberNaN: true,
  undef: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isNaN', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
