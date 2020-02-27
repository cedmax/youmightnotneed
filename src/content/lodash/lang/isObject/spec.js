const expected = {
  object: true,
  array: true,
  funct: true,
  null: false,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('isObject', () => {
  expect(lodash).toEqual(expected)
  expect(plain).toEqual(lodash)
})
