const expected = {
  string: true,
  null: false,
  nan: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('string', () => {
  expect(lodash.string).toEqual(expected.string)
  expect(plain.string).toEqual(lodash.string)
})

test('null', () => {
  expect(lodash.null).toEqual(expected.null)
  expect(plain.null).toEqual(lodash.null)
})
test('nan', () => {
  expect(lodash.nan).toEqual(expected.nan)
  expect(plain.nan).toEqual(lodash.nan)
})
