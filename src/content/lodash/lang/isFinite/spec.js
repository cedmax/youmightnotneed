const expected = {
  integer: true,
  lowerBound: true,
  infinite: false,
  stringNumber: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('integer', () => {
  expect(lodash.integer).toEqual(expected.integer)
  expect(plain.integer).toEqual(lodash.integer)
})

test('lowerBound', () => {
  expect(lodash.lowerBound).toEqual(expected.lowerBound)
  expect(plain.lowerBound).toEqual(lodash.lowerBound)
})

test('infinite', () => {
  expect(lodash.infinite).toEqual(expected.infinite)
  expect(plain.infinite).toEqual(lodash.infinite)
})

test('stringNumber', () => {
  expect(lodash.stringNumber).toEqual(expected.stringNumber)
  expect(plain.stringNumber).toEqual(lodash.stringNumber)
})
