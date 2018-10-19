const expected = {
  array: 3,
  object: { 1: ['a', 'c'], 2: ['b'] },
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
