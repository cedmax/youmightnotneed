const expected = {
  return: [3, 2, 1],
  mutated: [3, 2, 1],
}

const lodash = require('./lodash')
const plain = require('./vanilla')

test('original array', () => {
  expect(lodash.mutated).toEqual(expected.mutated)
  expect(plain.mutated).toEqual(lodash.mutated)
})

test('returned array', () => {
  expect(lodash.return).toEqual(expected.return)
  expect(plain.return).toEqual(lodash.return)
})
