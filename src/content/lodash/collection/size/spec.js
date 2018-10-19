const expected = {
  array: 3,
  object: 2,
  string: 7,
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('array', () => {
  expect(lodash.array).toEqual(expected.array)
  expect(plain.array).toEqual(lodash.array)
})

test('object', () => {
  expect(lodash.object).toEqual(expected.object)
  expect(plain.object).toEqual(lodash.object)
})

test('string', () => {
  expect(lodash.string).toEqual(expected.string)
  expect(plain.string).toEqual(lodash.string)
})
