const expected = {
  simple: [2, 3],
  withNumber: [3],
  withNumberVariant: [],
  withZero: [1, 2, 3],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('simple', () => {
  expect(lodash.simple).toEqual(expected.simple)
  expect(plain.simple).toEqual(lodash.simple)
})

test('withNumber', () => {
  expect(lodash.withNumber).toEqual(expected.withNumber)
  expect(plain.withNumber).toEqual(lodash.withNumber)
})

test('withNumberVariant', () => {
  expect(lodash.withNumberVariant).toEqual(expected.withNumberVariant)
  expect(plain.withNumberVariant).toEqual(lodash.withNumberVariant)
})

test('withZero', () => {
  expect(lodash.withZero).toEqual(expected.withZero)
  expect(plain.withZero).toEqual(lodash.withZero)
})
