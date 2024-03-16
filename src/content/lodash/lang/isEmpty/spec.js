const expected = {
  array: false,
  emptyArray: true,
  emptyMap: true,
  emptySet: true,
  emptyString: true,
  map: false,
  null: true,
  number: true,
  object: false,
  boolean: true,
  set: false,
  string: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isEmpty', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
