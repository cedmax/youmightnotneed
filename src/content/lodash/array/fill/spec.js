const expected = {
  array: ['a', 'a', 'a'],
  arrayConstructor: [2, 2, 2],
  partial: [4, '*', '*', 10],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('array', () => {
  expect(lodash.array).toEqual(expected.array)
  expect(plain.array).toEqual(lodash.array)
})

test('arrayConstructor', () => {
  expect(lodash.arrayConstructor).toEqual(expected.arrayConstructor)
  expect(plain.arrayConstructor).toEqual(lodash.arrayConstructor)
})

test('partial', () => {
  expect(lodash.partial).toEqual(expected.partial)
  expect(plain.partial).toEqual(lodash.partial)
})
