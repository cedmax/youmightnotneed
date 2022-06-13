const expected = {
  null: true,
  true: true,
  number: true,
  array: false,
  object: false,
  map: true
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isEmpty', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
