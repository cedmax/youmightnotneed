const expected = {
  default: 1,
  falsy: '',
  undefined: 10,
  null: 10,
  nan: 10,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('default', () => {
  expect(lodash.default).toEqual(expected.default)
  expect(plain.default).toEqual(lodash.default)
})

test('falsy', () => {
  expect(lodash.falsy).toEqual(expected.falsy)
  expect(plain.falsy).toEqual(lodash.falsy)
})

test('undefined', () => {
  expect(lodash.undefined).toEqual(expected.undefined)
  expect(plain.undefined).toEqual(lodash.undefined)
})

test('null', () => {
  expect(lodash.null).toEqual(expected.null)
  expect(plain.null).toEqual(lodash.null)
})

test('nan', () => {
  expect(lodash.nan).toEqual(expected.nan)
  expect(plain.nan).toEqual(lodash.nan)
})
