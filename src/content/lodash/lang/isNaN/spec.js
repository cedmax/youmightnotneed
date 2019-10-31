const expected = {
  NaN: true,
  NumberNaN: true,
  undef: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('NaN', () => {
  expect(lodash.NaN).toEqual(expected.NaN)
  expect(plain.NaN).toEqual(lodash.NaN)
})

test('NumberNaN', () => {
  expect(lodash.NumberNaN).toEqual(expected.NumberNaN)
  expect(plain.NumberNaN).toEqual(lodash.NumberNaN)
})

test('undef', () => {
  expect(lodash.undef).toEqual(expected.undef)
  expect(plain.undef).toEqual(lodash.undef)
})
