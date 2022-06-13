const expected = {
  null: true,
  undef: true,
  boolTrue: true,
  boolFalse: true,
  number: true,
  array: false,
  emptyArray: true,
  object: false,
  emptyObject: true,
  map: false,
  emptyMap: true,
  symbol: true,
  string: false,
  emptyString: true,
  function: true
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isEmpty', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
