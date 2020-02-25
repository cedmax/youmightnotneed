const expected = {
  array: [1, 3],
  evens: [2, 4],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('original array', () => {
  expect(lodash.array).toEqual(expected.array)
  expect(plain.array).toEqual(lodash.array)
})

test('returned array', () => {
  expect(lodash.evens).toEqual(expected.evens)
  expect(plain.evens).toEqual(lodash.evens)
})
